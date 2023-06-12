package main

import (
	"flag"
	"github.com/BurntSushi/toml"
	"github.com/nugumanov03/Cartera/BackEnd/internal/app/apiserver"
)

var (
	configPath string
)

func init () {
	flag.StringVar(&configPath, "config-path" , "configs/apiserver.toml" , "path to config file")
}

func main() {
	flag.Parse()


	config := apiserver.NewConfig()
	_ , err := toml.DecodeFile(configPath , config)
	if err != nil {
		log.Fatal(err)
	}

	s := apiServer.New(config)
	if err := s.Start(); err != nil {
		log.Fatal(err)
	}
}