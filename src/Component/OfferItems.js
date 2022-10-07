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
    <Box sx={{ overflow: "auto" }}>
      <Box
        display='flex'
        flexWrap='nowrap'
        p='1'
      >
        {offerProductsList.map(({ id,category, name, brand, imgUrl, price, offerPercent, stock , nbProducts}) => {
          return (
            <List key={id}>
              <ListItem>
                <Box py='1' pr='2' minW='310px'>
                  <ProductCard
                    id={id}
                    name={name}
                    brand={brand}
                    category={category}
                    imgUrl={imgUrl}
                    nbProducts={nbProducts}
                    price={price}
                    stock={stock}
                    offerPercent={offerPercent}
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