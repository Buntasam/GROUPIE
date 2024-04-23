package controller

import (
	"net/http"
	"fmt"
)

func codeErreur(w http.ResponseWriter, r *http.Request, status int, message string) {

	if status == 404 {
		http.Error(w, "404 not found", http.StatusNotFound)
		fmt.Println("[SERVER_ALERT] - 404 : File not found, or missing...", message)
	}
	if status == 400 {
		http.Error(w, "400 Bad request", http.StatusBadRequest)
		fmt.Println("[SERVER_ALERT] - 400 : Bad request", message)
	}
	if status == 500 {
		http.Error(w, "500 Internal server error", http.StatusInternalServerError)
		fmt.Println("[SERVER_ALERT] - 500 : Internal server error", message)
	}
}
