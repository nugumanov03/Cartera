package sqlstore

import "github.com/nugumanov03/Cartera/internal/app/model"

type DiscountRepository struct {
	store *Store
}

func (r *DiscountRepository) Create(d *model.Discount) error {
	if err := d.ValidateCreate(); err != nil {
		return err
	}

	return r.store.db.QueryRow(
		"INSERT INTO discounts (titel, description, img) VALUES ($1, $2, $3)",
		&d.Titel, &d.Description, &d.Image,
	).Scan(&d.ID)
}

func (r *DiscountRepository) Get() ([]*model.Discount, error) {
	result := []*model.Discount{}

	rows, err := r.store.db.Query("SELECT * FROM discounts")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		d := &model.Discount{}
		if err := rows.Scan(&d.ID, &d.Titel, &d.Description, &d.Image); err != nil {
			return nil, err
		}

		result = append(result, d)
	}

	return result, nil
}
