import {
  Button,
  Tooltip
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AddToCartButton = (props) => {
  const { handleAddToCart, stock, isMobile } = props
  return (
    <Tooltip isDisabled={isMobile ? true : false} label='Add to cart>' placement='bottom' bg='teal.500'>
      <Button
        borderRadius='md'
        size='md'
        variant='outline'
        colorScheme='teal'
        isDisabled={stock > 0 ? false : true}
        onClick={handleAddToCart} >
        <FontAwesomeIcon size='2xl' icon='fa-solid fa-cart-shopping' color='teal' />
      </Button>
    </Tooltip>
  )
}