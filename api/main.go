package main

import (
	"net/http"

	"github.com/Devcon4/heron/api/packages/framework"
	"github.com/Devcon4/heron/api/packages/router"
)

func main() {
	app := framework.NewServer(&http.Server{
		Addr: ":3000",
	})

	app.RegisterRouter(router.NewMainRouter())

	if err := app.ListenAndServe(); err != nil {
		panic(err)
	}
}
