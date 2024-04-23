package controller

import (
	"html/template"
	"io/ioutil"
	"net/http"
	"strings"
)

func Accueil(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path != "/accueil" {
		codeErreur(w, r, 404, "Page not found")
		return
	}

	custTemplate, err := template.ParseFiles("./templates/accueil.html")
	if err != nil {
		codeErreur(w, r, 500, "Template not found : accueil.html")
		return
	}

	err = custTemplate.Execute(w, nil)
}


func Search(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/search" {
		codeErreur(w, r, 404, "Page not found")
		return
	}

	custTemplate, err := template.ParseFiles("./templates/search.html")
	if err != nil {
		codeErreur(w, r, 500, "Template not found : search.html")
		return
	}

	err = custTemplate.Execute(w, nil)
}

func loadApi(w http.ResponseWriter, r *http.Request, endpoint string) {
	tab := [4]string{"artists", "locations", "dates", "relation"}
	endpointIsValid := false

	for i := 0; i < len(tab); i++ {
		if endpoint == tab[i] {
			endpointIsValid = true
			break
		}
	}

	if !endpointIsValid {
		codeErreur(w, r, 400, "Invalid endpoint")
		return
	}

	response, err := http.Get("https://groupietrackers.herokuapp.com/api/" + endpoint)
	if err != nil {
		codeErreur(w, r, 500, "Server API is not responding")
		return
	}

	responseData, err := ioutil.ReadAll(response.Body)
	if err != nil {
		codeErreur(w, r, 500, "No data to sent")
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.Write(responseData)
}

func getId(w http.ResponseWriter, r *http.Request, id string) {
	response, err := http.Get("https://groupietrackers.herokuapp.com/api/relation/" + id)
	if err != nil {
		codeErreur(w, r, 500, "Server API is not responding")
		return
	}

	responseData, err := ioutil.ReadAll(response.Body)
	if err != nil {
		codeErreur(w, r, 500, "No data to sent")
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.Write(responseData)
}

func RelationData(w http.ResponseWriter, r *http.Request) {
	pathPart := strings.Split(r.URL.Path, "/")
	getId(w, r, pathPart[len(pathPart)-1])
}
