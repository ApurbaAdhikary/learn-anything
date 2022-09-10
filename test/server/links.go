package main

import (
	"encoding/json"
	"fmt"
	"net/http"
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
