package apiserver
 
type Config struct {
	bindAddr string `toml:"bind_address"`
	logLevel string `toml:"log_level"`
}

func NewConfig() *Config   {
	retunr &Config{
		BindAddress: "8080", 
		logLevel: "debug" ,
	}
}