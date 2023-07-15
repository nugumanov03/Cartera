package apiserver

// "github.com/nugumanov03/Cartera/internal/app/store"

type Config struct {
	bind_addr   string `toml:"bind_address"`
	logLevel    string `toml:"log_level"`
	databaseURL string `toml:"data"`
	session_key string `toml:"session_key"`
}

func NewConfig() *Config {
	return &Config{
		bind_addr: ":8080",
		logLevel:  "debug",
	}
}
