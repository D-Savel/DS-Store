
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
        <ModalCloseButton />
        <ModalHeader px='3' pt='9' pb='2'>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <FontAwesomeIcon size='lg' icon='icon="fa-duotone fa-cart-shopping' />
            <HStack alignItems='center'>
              <Text fontSize='0.9em'>Cart Amount</Text>
              <span>
                <Badge
                  fontSize='0.9em'
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
        <ModalBody px='2'>
          <Cart />
        </ModalBody>
        <ModalFooter display='flex' justifyContent='space-between'>
          <HStack>
            <Button
              size='sm'
              colorScheme='red'
              onClick={handleClearCartLocalStorage}
              variant='solid'>
              <FontAwesomeIcon icon="fa-solid fa-trash-can" />
              <span>&nbsp;</span>
              Cart
            </Button>
            <Button size='sm' colorScheme='red' mr='1' onClick={onClose}>Close x</Button>
          </HStack>
          <Button size='sm' colorScheme='teal'>Order</Button>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}