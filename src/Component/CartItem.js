
import { useDispatch } from 'react-redux'
import { delCartItem, updateItemQty } from '../redux/reducers/cartSlice'
import { itemPricing } from '../utils/itemPricing'
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
  const [isMobile] = useMediaQuery('(max-width: 380px)')
  const netPrice = itemPricing(price, offerPercent)
  const fontSizing = isMobile ? '0.8em' : '1.1em'

  const dispatch = useDispatch()
  const handleDelCartItem = () => dispatch(delCartItem({ id: id }))
  const handleUpdateItemQty = (value) => dispatch(updateItemQty({ id: id, qty: value }))

  console.log('idCartItem', id)
  console.log('itemQty', qty)

  return (
    < ListItem>
      <HStack alignItems='center' justifyContent='space-around'>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Image
            boxSize='60px'
            objectFit='contain'
            src={imgUrl} alt={name}
          />
        </Box>
        <Box minW={isMobile ? '85px' : '260px'} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Badge pb='1' fontSize='0.7em' px='2' borderRadius='md' variant='solid'>
            {brand.charAt(0).toUpperCase()}{brand.slice(1)}
          </Badge>
          <Text align='center' fontSize={fontSizing}>{name}</Text>
        </Box>
        <Text align='center' minW={!isMobile && '90px'} fontSize={fontSizing}> {netPrice.toFixed(2)} €</Text>
        <NumberInput w={!isMobile && ('120px')} size='xs' min='0' max={stock > 10 ? '10' : stock} defaultValue={qty} onChange={handleUpdateItemQty}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text align='center' minW={!isMobile && '90px'} fontSize={fontSizing} >{(qty * netPrice).toFixed(2)} €</Text>
        <Button px='2' colorScheme='red' variant='solid' size='xs' onClick={handleDelCartItem}>x</Button>
      </HStack>
    </ListItem >
  )
}