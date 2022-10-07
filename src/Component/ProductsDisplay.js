import {
  Box,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react'
import { CategorySelect } from './CategorySelect'
import { ProductCard } from './ProductCard'

export const ProductsDisplay = (props) => {
  const { selectedCategory, productsList } = props

  return (
    <Box>
      <Heading as='h1' fontSize='1.8em' pb='1' pl='3' >
        <CategorySelect selectedCategory={selectedCategory} />
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap='2'>
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
                specifications={product.specifications}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}