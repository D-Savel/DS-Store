import {
  Badge,
  Box,
  Text
} from '@chakra-ui/react'
import { itemPricing } from '../utils/itemPricing'

export const PriceTag = (props) => {
  const { price, offerPercent } = props
  const netPrice = itemPricing(price, offerPercent)

  return (
    <>
      {offerPercent > 0 ?
        <>
          <Box display='flex' flexDirection='column' justifyContent='center' align='center'>
            <Text as='s' fontSize='1em' color='grey' px='2'>
              {price.toFixed(2)} €
            </Text>
            <span>
              <Badge
                w='80%'
                px='2'
                borderRadius='md'
                fontSize='1.2em'
                variant='solid'
                colorScheme='red'>
                {netPrice.toFixed(2)} €
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