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
          {cart.map((product) => {
            return (
              <List key={product.id}>
                <CartItem
                  product={product}
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