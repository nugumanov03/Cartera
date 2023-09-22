package sqlstore

import "github.com/nugumanov03/Cartera/internal/app/model"

type DiscountRepository struct {
	store *Store
}

func (r *DiscountRepository) Create(d *model.Discount) error {
	return nil
}
