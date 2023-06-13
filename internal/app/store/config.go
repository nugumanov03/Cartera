package store

type Config struct {
	DataBaseURL string `toml:"data_base_url"`
}

func  NewConfig() *Config {
	return &Config{
		bindAddr: ":8080",
		LogLevel : "debug",
		Store : store.NewConfig(),
	}
}