package main

import (
	"net/http"
	"html/template"
)

var tmpl *template.Template

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl.ExecuteTemplate(w, "index.html", nil)
}

func main() {
	http.HandleFunc("/", HomeHandler)
	http.ListenAndServe(":9999", nil)
} 

func Init() {
	tmpl = template.Must(template.ParseGlob("templates/*.html"))
}