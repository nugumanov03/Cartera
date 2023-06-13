package store_test

var (
	defaultbaseURL string
)
func TestMain(m *testing.M) {
	DataBaseURL := os.Getenv("defaultBaseURL")
	if databaseUrl == ""{
		databaseUrl = "host=localhost dbname=Cartera_test sslmode=false"
	}
	os.Exit(m.Run())
}