package router

import (
	"net/http"

	"github.com/Devcon4/heron/api/packages/framework"
)

func NewMainRouter() *framework.Router {
	r := framework.NewRouter("/main")

	r.Handle("/info", infoHandler())
	return r
}

func infoHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("info"))
	})
}
