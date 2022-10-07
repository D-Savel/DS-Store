import { products } from "../data/products"

export const findProductItemsWithId = (id) => {
  let product = products.filter(product => product.id === id)
  let [productItems] = product
  return (productItems)
}