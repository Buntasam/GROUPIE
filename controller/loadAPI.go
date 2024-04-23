package controller

import "net/http"

func Artists(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "artists")
}

func Locations(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "locations")
}

func Dates(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "dates")
}

func Relation(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "relation")
}
