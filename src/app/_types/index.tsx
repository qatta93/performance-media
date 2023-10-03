export interface ProductProps {
  id: number,
  name: string,
  description: string,
  price: number,
  rating: number,
  ratingNumber: number,
  image: string
}

export interface ProductCardProps {
  key: number,
  product: ProductProps,
}

export interface HeroProps {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: Array<string>,
  species: Array<string>,
  vehicles: Array<string>,
  starships: Array<string>
  created: string,
  edited: string,
  url: string
}

export interface ItemProps {
  name: string,
  rating: number,
}

export interface SortOrderProps {
  descending: string,
  ascending: string,
}
