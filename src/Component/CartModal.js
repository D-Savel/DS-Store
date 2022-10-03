
import { useDispatch, useSelector } from 'react-redux'
import { delCart } from '../redux/reducers/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatAmountInEuro } from '../utils/formatAmountInEuro'
import {
  Box,
  Badge,
  Button,
  Divider,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text
} from '@chakra-ui/react'
import { Cart } from './Cart'

export const CartModal = (props) => {
  const { isOpen, onClose } = props
  const dispatch = useDispatch()
  const handleClearCartLocalStorage = () => dispatch(delCart())
  const { cartAmount } = useSelector(state => state.cart)

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader px='3' pt='9' pb='2'>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <FontAwesomeIcon size='lg' icon='icon="fa-duotone fa-cart-shopping' />
            <HStack alignItems='center' pr='5'>
              <Text fontSize='0.8em'>Cart Amount</Text>
              <span>
                <Badge
                  fontSize='0.8em'
                  borderRadius='lg'
                  variant='solid'
                  colorScheme='blue'>
                  {formatAmountInEuro(cartAmount)}
                </Badge>
              </span>
            </HStack>
          </Box>
          <Divider />
          <Divider />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody px='2'>
          <Cart />
        </ModalBody>
        <ModalFooter>
          <HStack justifyContent='space-between'>
            <Button
              size='sm'
              colorScheme='red'
              onClick={handleClearCartLocalStorage}
              variant='solid'>
              <FontAwesomeIcon icon="fa-solid fa-trash-can" />
              <span>&nbsp;</span>
              Cart
            </Button>
            <Box>
              <Button size='sm' colorScheme='red' mr='1' onClick={onClose}>Close x</Button>
              <Button size='sm' colorScheme='teal'>Confirm Order</Button>
            </Box>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}