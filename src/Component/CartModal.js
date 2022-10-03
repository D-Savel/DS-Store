
import { useDispatch } from 'react-redux'
import { delCart } from '../redux/reducers/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Cart } from './Cart'

export const CartModal = (props) => {
  const { isOpen, onClose } = props
  const dispatch = useDispatch()
  const handleClearCartLocalStorage = () => dispatch(delCart())

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
      <ModalOverlay />
      <ModalContent >
        <ModalHeader>Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Cart />
        </ModalBody>
        <ModalFooter>
          <Box display='flex' justifyContent='space-between' gap='1' >
            <Button
              size='sm'
              colorScheme='red'
              onClick={handleClearCartLocalStorage}
              variant='solid'>
              <FontAwesomeIcon icon="fa-solid fa-trash-can" />
              <span>&nbsp;</span>
              cart
            </Button>
            <Box>
              <Button size='sm' colorScheme='red' mr='1' onClick={onClose}>Close  x</Button>
              <Button size='sm' colorScheme='teal'>Confirm Order</Button>
            </Box>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}