import { products } from '../data/products'
import { ProductCard } from "./ProductCard"
import {
  Box,
  List
} from '@chakra-ui/react'

export const OfferItems = (props) => {

  let offerProductsList = products.filter(product => product.offerPercent > 0)

  return (
    <Box sx={{ overflow: "auto" }} px='2'>
      <Box display='flex' flexWrap='nowrap' p='1'>
        {offerProductsList.map((product) => {
          return (
            <List key={product.id}>
              <Box py='1' pr='2' minW='230px'>
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
              </Box>
            </List>
          )
        })}
      </Box >
    </Box >
  )
}