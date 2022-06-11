package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
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

func main() {
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
