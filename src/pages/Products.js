import ProductCard from "../Component/ProductCard"
import { products } from "../data/products"
import {
  Box,
  Grid,
  GridItem,
  Heading,
  List,
} from '@chakra-ui/react'

const Products = (props) => {
  const { select } = props
  let productsList = []
  let sortedProductsList = products.sort((a, b) => a.category.localeCompare(b.category))
  if (select === 'all categories') {
    productsList = sortedProductsList
  } else {
    productsList = products.filter(product => product.category === select)
  }
  console.log(sortedProductsList)
  return (
    <Box px='1'>
      <Heading as='h3' py='2'>{select.charAt(0).toUpperCase()}{select.slice(1)}</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap='3'>
        {productsList.map((product) => {
          return (
            <List key={product.id}>
              <GridItem>
                <ProductCard
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
            </List>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Products