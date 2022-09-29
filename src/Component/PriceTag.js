import {
  Badge,
  Box,
  Text
} from '@chakra-ui/react'

export const PriceTag = (props) => {
  const { price, offerPercent } = props

  const offerPrice = (price * (100 - offerPercent) / 100)

  return (
    <>
      {offerPercent > 0 ?
        <>
          <Box display='flex' flexDirection='column' justifyContent='center' align='center'>
            <Text as='s' fontSize='1.1em' color='grey' px='2'>
              {price.toFixed(2)} €
            </Text>
            <Badge
              px='2'
              borderRadius='md'
              fontSize='1.3em'
              variant='solid'
              colorScheme='red'>
              {offerPrice.toFixed(2)} €
            </Badge>
          </Box>
        </>
        :
        <Badge
          px='2'
          borderRadius='md'
          fontSize='1.3em'
          variant='solid'
          colorScheme='green'>
          {price.toFixed(2)} €
        </Badge>
      }
    </>
  )
}