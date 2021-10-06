package framework

import "net/http"

type Server struct {
	http.Server
	root *http.ServeMux
}

func NewServer(baseServer *http.Server) *Server {
	return &Server{
		Server: *baseServer,
		root:   http.NewServeMux(),
	}
}

func (s *Server) RegisterRouter(router *Router) {
	s.root.Handle(router.Path, http.StripPrefix(router.Path, router))
}
