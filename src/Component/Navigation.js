import { useState } from 'react'
import { NavigationListItems } from './NavigationListItems'
import { MobileNavigation } from './MobileNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Badge,
  Flex,
  HStack,
  StackDivider,
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

  const { setSelect } = props

  const [amount, setAmount] = useState(115.45)
  const [itemsQuantity, setItemsQuantity] = useState(12)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery('(max-width: 720px)')
  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Box position='sticky' w='100%' top='0' zIndex='sticky' bg='gray.300'>
      <Flex align='center' justify='space-between' direction='row'>
        <Box as='nav' bg='gray.300' >
          {isMobile ? (
            <MobileNavigation setSelect={setSelect} />
          ) : (
            <NavigationListItems setSelect={setSelect} />
          )}
        </Box>
        <Box>
          {colorMode === 'light' ?
            <Button mr='2' p='2' colorScheme='blackAlpha' variant='solid' onClick={toggleColorMode} size='2xl'>
              <MoonIcon color='yellow' w='-' h='6' />
            </Button>
            : <Button mr='2' p='2' colorScheme='yellow' variant='solid' onClick={toggleColorMode} size='2xl'>
              <SunIcon color='white' w='6' h='6' />
            </Button>}
          <Badge border='1px' borderColor='gray.200' borderLeftRadius='lg' color='white'>
            <Flex direction='row' >
              <HStack mr='2' align='center'>
                <Tooltip label='Open Cart' placement='bottom' bg='teal.500'>
                  <Badge as='button' p='2' borderRadius='lg' variant='solid' colorScheme='gray' onClick={onOpen}>
                    <FontAwesomeIcon size='2xl' icon='fa-solid fa-cart-shopping' color='white' />
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
              <HStack minW='40px' align='center' divider={<StackDivider borderColor='black' />}
                spacing={0.5}>
                <HStack px='1'>
                  <span style={{ color: 'black' }}>Qty: </span>
                  <Badge fontSize='1.4em' px='2' py='1' borderRadius='lg' variant='solid' colorScheme='green'>{itemsQuantity}</Badge>
                </HStack>
                <Badge mx='1' fontSize='1.4em' px='2' py='1' borderRadius='lg' variant='solid' colorScheme='blue'>{amount} €</Badge>
              </HStack>
            </Flex>
          </Badge>
        </Box>
      </Flex >
    </Box >


  )
}