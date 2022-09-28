import { useSelector } from 'react-redux'
import { ProductCard } from "../Component/ProductCard"
import { products } from "../data/products"
import {
  Box,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react'

export const Products = (props) => {
  const selectCategory = useSelector(state => state.selectCategory.value)
  const getCart = JSON.parse(localStorage.getItem('cart'))
  console.log('cart localStorage', getCart)

  let productsList = []
  let sortedProductsList = products.sort((a, b) => a.category.localeCompare(b.category))
  if (selectCategory === 'all categories') {
    productsList = sortedProductsList
  } else {
    productsList = products.filter(product => product.category === selectCategory)
  }

  return (
    <Box px='1'>
      <Heading as='h3' py='2'>{selectCategory.charAt(0).toUpperCase()}{selectCategory.slice(1)}</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap='3'>
        {productsList.map((product) => {
          return (
            <GridItem key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                brand={product.brand}
                category={product.category}
                imgUrl={product.imgUrl}
                nbProducts={product.nbProducts}
                price={product.price}
                stock={product.stock}
                offerPercent={product.offerPercent}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}