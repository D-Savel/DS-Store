import { useDispatch, useSelector } from 'react-redux'
import { setSelectCategory } from '../redux/reducers/selectCategorySlice'
import { products } from '../data/products'
import {
  Box,
  Grid,
  GridItem,
  Heading,
  List
} from '@chakra-ui/react'
import { ProductCard } from '../Component/ProductCard'



export const Offers = (props) => {

  const dispatch = useDispatch()
  dispatch(setSelectCategory('all categories'))

  const select = useSelector(state => state.selectCategory.value)

  let productsList = []
  let offerList = products.filter(product => product.offerPercent > 0)
  if (select === 'all categories') {
    productsList = offerList
  } else {
    productsList = offerList.filter(product => product.category === select)
  }

  return (
    <>
      <Heading w='100%' textAlign='center' mt='2' py='2' bg='red' color='white'>SPECIALS OFFERS FOR YOU !!!</Heading>
      <Box w='100%' pt='2'>
        <Heading as='h1' pl='2' py='3'>{select.charAt(0).toUpperCase()}{select.slice(1)}</Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap='3'>
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
    </>
  )
}
