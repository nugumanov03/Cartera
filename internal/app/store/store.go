package store

type Store interface {
	User() UserRepository
	Discount() DiscountRepository
	News() NewsRepository
}
