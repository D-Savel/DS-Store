import {
  Badge,
  Box,
  Text
} from '@chakra-ui/react'
import { itemPricing } from '../utils/itemPricing'
import { formatAmountInEuro } from '../utils/formatAmountInEuro'

export const PriceTag = (props) => {
  const { price, offerPercent } = props
  const netPrice = itemPricing(price, offerPercent)

  return (
    <>
      {offerPercent > 0 ?
        <>
          <Box px='1' display='flex' flexDirection='crow' justifyContent='center' align='center' gap='2'>
            <Text as='s' color='grey' px='1'>
              {formatAmountInEuro(price)}
            </Text>
            <span>
              <Badge
                px='1'
                borderRadius='md'
                fontSize='1.2em'
                variant='solid'
                colorScheme='red'>
                {formatAmountInEuro(netPrice)}
              </Badge>
            </span>
          </Box>
        </>
        :
        <Badge
          px='2'
          borderRadius='md'
          fontSize='1.2em'
          variant='solid'
          colorScheme='green'>
          {price.toFixed(2)} €
        </Badge>
      }
    </>
  )
}