export interface ProductCardProps {
  id: string
  name: string
  image: string
  description?: string
  price: number
  category?: string
  featured?: boolean
  rating?: number
}