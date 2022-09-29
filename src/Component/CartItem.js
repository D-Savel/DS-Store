
import { PriceTag } from "./PriceTag"
import {
  Badge,
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
  const { name, brand, category, imgUrl, price, offerPercent, qty } = props
  const [isMobile] = useMediaQuery('(max-width: 660px)')
  const offerPrice = (price * (100 - offerPercent) / 100)
  return (
    < ListItem>
      <HStack justifyContent='center'>
        <Image
          boxSize='60px'
          objectFit='contain'
          src={imgUrl} alt={name}
        />
        <Box minW={isMobile ? '50px' : '180px'} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Text as='b' fontSize='0.9em'>{category.charAt(0).toUpperCase()}{category.slice(1, -1)}</Text>
          <Badge fontSize='0.7em' px='2' borderRadius='md' variant='solid'>
            {brand.charAt(0).toUpperCase()}{brand.slice(1)}
          </Badge>
          <Text align='center' fontSize='0.9em'>{name}</Text>
        </Box>
        <PriceTag offerPercent={offerPercent} price={price} />
        <NumberInput maxW='60px' size='sm' min='0' max='10' defaultValue={qty}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {offerPercent > 0 ?
          <Text fontSize='0.8em'>{(qty * offerPrice).toFixed(2)} €</Text>
          :
          <Text fontSize='0.8em'>{(qty * price).toFixed(2)} €</Text>
        }
      </HStack>
    </ListItem >
  )
}