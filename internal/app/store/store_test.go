package store_test


import (
	"os"
	"testing"
)

var (
	defaultbaseURL string
)
func TestMain(m *testing.M) {
	defaultbaseURL = os.Getenv("defaultBaseURL")
	if defaultbaseURL == "" {
		defaultbaseURL = "host=localhost dbname=Cartera_test sslmode=false"
	}
	os.Exit(m.Run())
}