import { products } from '../data/products'
import { ProductCard } from "./ProductCard"
import {
  Box,
  List,
  ListItem
} from '@chakra-ui/react'

export const OfferItems = (props) => {

  let offerProductsList = products.filter(product => product.offerPercent > 0)

  return (
    <Box sx={{ overflow: "auto" }} px='2'>
      <Box display='flex' flexWrap='nowrap' p='1'>
        {offerProductsList.map((product) => {
          return (
            <List key={product.id}>
              <ListItem>
                <Box py='1' pr='2' minW='270px'>
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
                </Box>
              </ListItem>
            </List>
          )
        })}
      </Box >
    </Box >
  )
}