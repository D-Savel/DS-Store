import { useSelector } from 'react-redux'
import { products } from "../data/products"
import {
  Box
} from '@chakra-ui/react'
import { ProductsDisplay } from '../Component/ProductsDisplay'

export const Products = (props) => {

  const selectedCategory = useSelector(state => state.selectCategory.value)

  let productsList = []
  let sortedProductsList = products.sort((a, b) => a.category.localeCompare(b.category))
  if (selectedCategory === 'all') {
    productsList = sortedProductsList
  } else {
    productsList = products.filter(product => product.category === selectedCategory)
  }

  return (
    <Box px='1'>
      <ProductsDisplay selectedCategory={selectedCategory} productsList={productsList} />
    </Box>
  )
}