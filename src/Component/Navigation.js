
import { useSelector } from 'react-redux'
import { NavigationListItems } from './NavigationListItems'
import { MobileNavigation } from './MobileNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Badge,
  Flex,
  HStack,
  Tooltip,
  useMediaQuery,
  useColorMode,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Cart } from './Cart'

export const Navigation = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery('(max-width: 720px)')
  const { colorMode, toggleColorMode } = useColorMode()

  const { cartAmount, itemsQty } = useSelector(state => state.cart)

  return (
    <Box position='sticky' w='100%' top='0' zIndex='sticky' bg='gray.300'>
      <Flex align='center' justify='space-between' direction='row'>
        <Box as='nav' bg='gray.300' >
          {isMobile ? (
            <MobileNavigation />
          ) : (
            <NavigationListItems />
          )}
        </Box>
        <Box>
          <Button mr='2' py='1' px='2' colorScheme='blackAlpha' variant='solid' onClick={toggleColorMode} size='2xl'>
            {colorMode === 'light' ? <MoonIcon color='yellow' w='-' h='6' /> : <SunIcon color='yellow' w='6' h='6' />}
          </Button>
          <Badge position='relative' z-index='1' border='1px' borderColor='gray.200' borderLeftRadius='lg' color='white'>
            <Flex direction='row' >
              <HStack mr='2' align='center'>
                <Tooltip isDisabled={isMobile ? true : false} label='Open Cart' placement='bottom' bg='teal.500'>
                  <Badge as='button' p='2' borderRadius='xl' variant='solid' colorScheme='gray' onClick={onOpen}>
                    <FontAwesomeIcon size='xl' icon='icon="fa-duotone fa-cart-shopping' color='white' />
                  </Badge>
                </Tooltip>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Cart />
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme='red' mr={3} onClick={onClose}>
                        Close X
                      </Button>
                      <Button colorScheme='teal'>Confirm Order</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </HStack>
              <HStack minW='40px' align='center'
                spacing={4}>

                <Badge position='absolute' z-index='1' left='8' bottom='-1' pt='1' px='2' fontSize='1.1em' borderRadius='xl' variant='solid' colorScheme='green'>{itemsQty}</Badge>

                <Badge mx='1' fontSize='1.4em' px='2' py='1' borderRadius='lg' variant='solid' colorScheme='blue'>{cartAmount.toFixed(2)} €</Badge>
              </HStack>
            </Flex>
          </Badge>
        </Box>
      </Flex >
    </Box >


  )
}