import { useSelector } from 'react-redux'
import { products } from '../data/products'
import { ProductsDisplay } from '../Component/ProductsDisplay'
import {
  Heading,
  Box
} from '@chakra-ui/react'

export const Offers = (props) => {

  const selectedCategory = useSelector((state => state.selectCategory.value))

  let productsList = []
  let offerList = products.filter(product => product.offerPercent > 0)
  if (selectedCategory === 'all') {
    productsList = offerList
  } else {
    productsList = offerList.filter(product => product.category === selectedCategory)
  }

  return (
    <>
      <Heading w='100%' textAlign='center' mt='2' py='2' bg='red' color='white'>SPECIALS OFFERS FOR YOU !!!</Heading>
      <Box px='1' pt='2'>
        <ProductsDisplay selectedCategory={selectedCategory} productsList={productsList} />
      </Box>
    </>
  )
}
