package framework

import "net/http"

type Router struct {
	http.ServeMux
	Path string
}

func NewRouter(path string) *Router {
	return &Router{
		Path: path,
	}
}
