package apiserver
 
type Config struct {
	bindAddr string `toml:"bind_address"`
	logLevel string `toml:"log_level"`
	Store *store.Store
}

func NewConfig() *Config   {
	return &Config{
		bindAddr: "8080", 
		logLevel: "debug" ,
		Store : store.NewConfig(),
	}
}