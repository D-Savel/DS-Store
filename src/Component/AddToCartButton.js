import {
  Button
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AddToCartButton = (props) => {
  const { handleAddToCart, stock } = props
  return (

    <Button
      borderRadius='md'
      size='md'
      variant='outline'
      colorScheme='teal'
      isDisabled={stock > 0 ? false : true}
      onClick={handleAddToCart} >
      <FontAwesomeIcon size='2xl' icon='fa-solid fa-cart-shopping' color='teal' />
    </Button>

  )
}