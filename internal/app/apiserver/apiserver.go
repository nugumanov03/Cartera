package apiserver

import (
	"database/sql"
	"net/http"

	"github.com/gorilla/sessions"
	_ "github.com/lib/pq" //

	"github.com/nugumanov03/Cartera/internal/app/store/sqlstore"
)

func Start(config *Config) error {
	db, err := newDB(config.databaseURL)
	if err != nil {
		return err
	}
	defer db.Close()

	store := sqlstore.New(db)
	sessionStore := sessions.NewCookieStore([]byte(config.session_key))
	srv := NewServer(store, sessionStore)

	return http.ListenAndServe(config.bind_addr, srv)
}

func newDB(databaseURL string) (*sql.DB, error) {

	db, err := sql.Open("postgres", "host=localhost port=5432 dbname=test user=postgres password=229211 sslmode=disable connect_timeout=10")
	if err != nil {
		return nil, err
	}
	if err := db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}
