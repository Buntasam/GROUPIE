package main

import (
	"fmt"
	"net/http"
	controller "GROUPIE/controller" // LOAD CONTROLLER PACKAGES
)

func main() {
	fmt.Println(" Starting local Server...") 

	fs := http.FileServer(http.Dir("static")) // LOAD STATICS FILES
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	//MISE EN PLACE DES CHEMINS D'ACCES
	http.HandleFunc("/api/relation/", controller.RelationData)
	http.HandleFunc("/search", controller.Search)
	http.HandleFunc("/accueil", controller.Accueil)


	http.HandleFunc("/api/artists", controller.Artists)
	http.HandleFunc("/api/locations", controller.Locations)
	http.HandleFunc("/api/dates", controller.Dates)
	http.HandleFunc("/api/relation", controller.Relation)

	fmt.Println(" http://localhost:8000 ")       
	http.ListenAndServe(":8000", nil)                       
}
