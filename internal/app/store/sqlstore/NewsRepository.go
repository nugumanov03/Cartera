package sqlstore

import "github.com/nugumanov03/Cartera/internal/app/model"

type NewsRepository struct {
	store *Store
}

func (r *NewsRepository) Create(m *model.News) error {
	if err := m.ValidateCreate(); err != nil {
		return err
	}

	return r.store.db.QueryRow(
		"INSERT INTO news (title, img, description, preview_desc, fast_link) VALUES ($1, $2, $3, $4, $5) RETURNING id",
		&m.Title, &m.Img, &m.Description, &m.PreviewDesc, &m.FastLink,
	).Scan(&m.ID)
}
