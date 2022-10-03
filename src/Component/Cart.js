import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

import {
  List,
  StackDivider,
  VStack
} from '@chakra-ui/react'

export const Cart = (props) => {

  const cart = useSelector(state => state.cart.cartItems)
  const cartAmount = useSelector(state => state.cart.cartAmount)

  return (
    <>
      {cart.length > 0 ?
        <VStack

          divider={<StackDivider borderColor='gray.200' />}
          spacing='1'
          align='stretch'
        >
          {cart.map((item) => {
            return (
              <List key={item.id}>
                <CartItem
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  category={item.category}
                  imgUrl={item.imgUrl}
                  nbProducts={item.nbProducts}
                  price={item.price}
                  stock={item.stock}
                  offerPercent={item.offerPercent}
                  qty={item.qty}
                  cartAmount={cartAmount}
                />
              </List>
            )
          })}
        </VStack>
        :
        <p>No item in cart</p>
      }
    </>

  )

}