package sqlstore

import "github.com/nugumanov03/Cartera/internal/app/model"

type MessageRepository struct {
	store *Store
}

func (r *MessageRepository) Create(m *model.Message) error {
	if err := m.ValidateCreate(); err != nil {
		return err
	}

	return r.store.db.QueryRow(
		"INSERT INTO messages (title, body) VALUES ($1, $2) RETURNING id",
		&m.Title, &m.Body,
	).Scan(&m.ID)
}

func (r *MessageRepository) Get() ([]*model.Message, error) {
	return nil, nil
}