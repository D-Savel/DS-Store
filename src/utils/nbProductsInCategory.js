import { products } from "../data/products"

export const nbProductsInCategory = (category) => {
  let nb = products.filter(products => products.category === category).length
  if (category === 'all') {
    nb = products.length
  }

  return nb
}