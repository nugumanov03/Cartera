package sqlstore_test


import (
	"os"
	"testing"
	"fmt"
)

var (
	defaultbaseURL string
)

func TestMain(m *testing.M) {
	defaultbaseURL = os.Getenv("defaultBaseURL")
	if defaultbaseURL == "" {
		defaultbaseURL = "host=localhost port=5431 dbname=cartera_test user=postgres password=s363790H sslmode=disable connect_timeout=10"
	}
	fmt.Print("Test Main Good!")
	os.Exit(m.Run())
}