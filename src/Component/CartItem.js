
import { useDispatch } from 'react-redux'
import { delCartItem, updateItemQty } from '../redux/reducers/cartSlice'
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
  useMediaQuery
} from '@chakra-ui/react'

export const CartItem = (props) => {
  const { id, name, brand, imgUrl, price, offerPercent, qty, stock } = props
  const [isMobile] = useMediaQuery('(max-width: 420px)')
  const netPrice = itemPricing(price, offerPercent)
  const fontSizing = isMobile ? '0.8em' : '1.1em'

  const dispatch = useDispatch()
  const handleDelCartItem = () => dispatch(delCartItem({ id: id }))
  const handleUpdateItemQty = (value) => dispatch(updateItemQty({ id: id, qty: value }))

  return (
    < ListItem >
      <HStack alignItems='center' justifyContent='space-around'>
        <Image
          boxSize='50px'
          objectFit='contain'
          src={imgUrl}
          alt={name}
        />
        <Box minW={!isMobile && '300px'} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Badge mb='1' fontSize='0.7em' px='2' borderRadius='md' variant='solid'>
            {brand.charAt(0).toUpperCase()}{brand.slice(1)}
          </Badge>
          <Text align='center' fontSize={fontSizing}>{name}</Text>
        </Box>
        <Text align='center' minW={!isMobile && '90px'} fontSize={fontSizing}> {formatAmountInEuro(netPrice)}</Text>
        <NumberInput minW={isMobile && '70px'} maxW='60px' size='sm' min='0' max={stock > 10 ? '10' : stock} defaultValue={qty} onChange={handleUpdateItemQty}>
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