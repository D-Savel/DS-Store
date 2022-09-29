import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { deleteCart } from '../redux/reducers/cartSlice'
import {
  Button,
  List,
  StackDivider,
  VStack
} from '@chakra-ui/react'

export const Cart = (props) => {

  const dispatch = useDispatch()
  const handleClearLocalStorage = () => dispatch(deleteCart())
  const cart = useSelector(state => state.cart.cartItems)
  const itemQty = useSelector(state => state.cart.itemsQty)
  const cartAmount = useSelector(state => state.cart.cartAmount)
  console.log('cartItems State', cart)

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
      <Button mr='2' p='2' colorScheme='red' variant='solid' onClick={handleClearLocalStorage} size='2xl'>X
      </Button>
    </>

  )

}