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

func (r *NewsRepository) Get() ([]*model.News, error) {
	result := []*model.News{}

	rows, err := r.store.db.Query("SELECT * FROM news")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		m := &model.News{}
		if err := rows.Scan(&m.ID, &m.Title, &m.Img, &m.Description, &m.PreviewDesc, &m.FastLink); err != nil {
			return nil, err
		}

		result = append(result, m)
	}

	return result, nil
}
