package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	edgedb "github.com/edgedb/edgedb-go"
)

// Gets all links saved for user as JSON
func links(w http.ResponseWriter, req *http.Request) {
	links := map[string]interface{}{
		"links": []string{"https://lobste.rs", "https://news.ycombinator.com"},
	}
	jsonLinks, err := json.Marshal(links)
	if err != nil {
		fmt.Printf("could not marshal json: %s\n", err)
		return
	}
	fmt.Fprintf(w, string(jsonLinks))
}

func edgedbSetup() {
	opts := edgedb.Options{
		Database:    "edgedb",
		User:        "edgedb",
		Concurrency: 4,
	}

	ctx := context.Background()
	client, err := edgedb.CreateClient(ctx, opts)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Close()

	var result string
	err = client.QuerySingle(ctx, "SELECT 'hello EdgeDB!'", &result)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(result)

}

func serve() {
	http.HandleFunc("/links", links)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}

func main() {
	edgedbSetup()
}
