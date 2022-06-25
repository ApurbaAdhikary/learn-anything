package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net"
	"os"

	"cloud.google.com/go/cloudsqlconn"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/stdlib"
	"github.com/joho/godotenv"
)

// loads environment variables from .env file
func loadEnv() {
	err := godotenv.Load(".env.local")
	if err != nil {
		log.Fatalf("Create `.env.local` file with your environment variables: %v", err)
	}
}

// sets up connection to Cloud SQL instance
// from: https://github.com/GoogleCloudPlatform/golang-samples/blob/main/cloudsql/postgres/database-sql/connect_connector.go
func connectWithConnector() (*sql.DB, error) {
	// Note: Saving credentials in environment variables is convenient, but not
	// secure - consider a more secure solution such as
	// Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
	// keep secrets safe.
	var (
		dbUser                 = os.Getenv("DB_USER")                  // e.g. 'my-db-user'
		dbPwd                  = os.Getenv("DB_PASS")                  // e.g. 'my-db-password'
		dbName                 = os.Getenv("DB_NAME")                  // e.g. 'my-database'
		instanceConnectionName = os.Getenv("INSTANCE_CONNECTION_NAME") // e.g. 'project:region:instance'
		usePrivate             = os.Getenv("PRIVATE_IP")
	)
	if dbUser == "" {
		log.Fatal("Warning: One of DB_USER or DB_IAM_USER must be defined")
	}

	dsn := fmt.Sprintf("user=%s password=%s database=%s", dbUser, dbPwd, dbName)
	config, err := pgx.ParseConfig(dsn)
	if err != nil {
		return nil, err
	}
	config.DialFunc = func(ctx context.Context, network, instance string) (net.Conn, error) {
		if usePrivate != "" {
			d, err := cloudsqlconn.NewDialer(
				ctx,
				cloudsqlconn.WithDefaultDialOptions(cloudsqlconn.WithPrivateIP()),
			)
			if err != nil {
				return nil, err
			}
			return d.Dial(ctx, instanceConnectionName)
		}
		// Use the Cloud SQL connector to handle connecting to the instance.
		// This approach does *NOT* require the Cloud SQL proxy.
		d, err := cloudsqlconn.NewDialer(ctx)
		if err != nil {
			return nil, err
		}
		return d.Dial(ctx, instanceConnectionName)
	}
	dbURI := stdlib.RegisterConnConfig(config)
	dbPool, err := sql.Open("pgx", dbURI)
	if err != nil {
		return nil, fmt.Errorf("sql.Open: %v", err)
	}
	return dbPool, nil
}
