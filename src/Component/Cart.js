import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../redux/reducers/cartSlice'
import {
  Button,
  List,
  ListItem
} from '@chakra-ui/react'

export const Cart = (props) => {

  const dispatch = useDispatch()
  const handleClearLocalStorage = () => dispatch(deleteCart())
  const cart = useSelector(state => state.cart.cartItems)
  console.log('cartItems State', cart)

  return (
    <>
      <p>Cart details</p>
      {cart.length > 0 ?
        <div>
          {cart.map((item) => {
            return (
              <List key={item.id}>
                <ListItem >
                  {item.brand} - {item.name} {item.qty}
                </ListItem>
              </List>
            )
          })}
        </div>
        :
        <p>No item in cart</p>
      }
      <Button mr='2' p='2' colorScheme='red' variant='solid' onClick={handleClearLocalStorage} size='2xl'>X
      </Button>
    </>

  )

}