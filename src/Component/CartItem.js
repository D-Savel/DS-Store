
import { useDispatch } from 'react-redux'
import { delCartItem, updateItemQty } from '../redux/reducers/cartSlice'
import { DetailedProductModal } from './DetailedProductModal'
import { itemPricing } from '../utils/itemPricing'
import { formatAmountInEuro } from '../utils/formatAmountInEuro'
import {
  Badge,
  Button,
  Box,
  ListItem,
  HStack,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useMediaQuery,
  useDisclosure
} from '@chakra-ui/react'

export const CartItem = (props) => {
  const { product } = props
  const { id, name, brand, imgUrl, price, offerPercent, qty, stock } = product
  const [isMobile] = useMediaQuery('(max-width: 420px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const netPrice = itemPricing(price, offerPercent)
  const fontSizing = isMobile ? '0.9em' : '1.1em'


  const dispatch = useDispatch()
  const handleDelCartItem = () => dispatch(delCartItem({ id: id }))
  const handleUpdateItemQty = (value) => dispatch(updateItemQty({ id: id, qty: value }))

  return (
    < ListItem >
      {isMobile && (
        <>
          <Box
            as='button'
            w={!isMobile && '300px'}
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            onClick={onOpen}>
            <Badge ml='2' mb='1' fontSize='0.7em' px='2' borderRadius='md' variant='solid'>
              {brand}
            </Badge>
            <Text w='290px' fontWeight='extrabold' fontSize={fontSizing}>{name}</Text>
          </Box>
          <DetailedProductModal isOpen={isOpen} onClose={onClose} idItem={id} />
        </>
      )}
      <HStack alignItems='center' justifyContent='space-around'>
        <Image
          boxSize='50px'
          objectFit='contain'
          src={imgUrl}
          alt={name}
        />
        {!isMobile && (
          <>
            <Box
              as='button'
              w={!isMobile && '370px'}
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              _hover={{
                background: "white",
                color: "teal.500",
              }}
              onClick={onOpen}>
              <Badge mb='1' fontSize='0.8em' px='2' borderRadius='md' variant='solid'>
                {brand}
              </Badge>
              <Text align='center' fontWeight='extrabold' fontSize={fontSizing}>{name}</Text>
            </Box>
            <DetailedProductModal isOpen={isOpen} onClose={onClose} idItem={id} />
          </>
        )}
        <Text align='center' minW={!isMobile && '90px'} fontSize={fontSizing}> {formatAmountInEuro(netPrice)}</Text>
        <NumberInput w='65px' size='sm' min='0' max={stock > 10 ? '10' : stock} defaultValue={qty} onChange={handleUpdateItemQty}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text align='center' minW={!isMobile && '95px'} fontSize={fontSizing} >{formatAmountInEuro(qty * netPrice)}</Text>
        <Button px='2' colorScheme='red' variant='solid' size='xs' onClick={handleDelCartItem}>x</Button>
      </HStack>
    </ListItem >
  )
}