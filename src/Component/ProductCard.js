import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice'
import {
  Badge,
  Button,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
  useMediaQuery
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProductCard = (props) => {
  const { id, name, brand, category, imgUrl, price, stock, offerPercent } = props
  const offerPrice = (price * (100 - offerPercent) / 100)
  const dispatch = useDispatch()
  const [isMobile] = useMediaQuery('(max-width: 720px)')

  const handleAddToCart = () => dispatch(addToCart({ id: id, name: name, brand: brand, imgUrl: imgUrl, price: price, offerPercent: offerPercent, qty: 1 }))

  return (
    <Box px='2' py='2' shadow='md' borderWidth='1px' className='category-card'>
      < Grid
        templateAreas={`'category category' 'image productInfo' 'image price''stock cartButton'`}
        gridTemplateRows={'1fr 3fr 2fr 1fr'}
        gridTemplateColumns={'1fr 1fr'} gap='1' >
        <GridItem area='category' textAlign='center'>
          <HStack justifyContent='center'>
            <Heading px='2' fontSize='1.6em'>{category.charAt(0).toUpperCase()}{category.slice(1, -1)}</Heading>
            {offerPercent > 0 && <Badge
              w='40%'
              borderRadius='md'
              fontSize='1.2em'
              variant='solid'
              colorScheme='red'>
              {offerPercent}% off
            </Badge>}
          </HStack>
        </GridItem>
        <GridItem area={'image'}>
          <Box h='250px' display="flex" alignItems="center" justifyContent="center">
            <Image
              borderRadius='lg'
              src={imgUrl} alt={category}
            />
          </Box>
        </GridItem>
        <Box width='100%' display='flex' flexDirection='column' justifyContent='start' alignItems='center'>
          <GridItem area='productInfo'>
            <Box pt='3' height='100%' display='flex' flexDirection='column' justifyContent='start' alignItems='center'>
              <Badge
                mb='3'
                px='6'
                fontSize='1em'
                borderRadius='md'
                variant='solid'
              >
                {brand.charAt(0).toUpperCase()}{brand.slice(1)}
              </Badge>
              <Box textAlign='center' width='95'>
                <Text fontSize='1.4em'>{name}</Text>
              </Box>
            </Box>
          </GridItem>
        </Box>
        <Flex pb='3' justify='center' align='center'>
          <GridItem area='price' textAlign='center'>
            {offerPercent > 0 ?
              <>
                <Text as='s' fontSize='1.1em' color='grey' px='2'>
                  {price.toFixed(2)} €
                </Text>
                <Badge
                  px='2'
                  w='85%'
                  borderRadius='md'
                  fontSize='1.5em'
                  variant='solid'
                  colorScheme='red'>
                  {offerPrice.toFixed(2)} €
                </Badge>
              </>
              :
              <>
                <Badge
                  px='2'
                  w='100%'
                  borderRadius='md'
                  fontSize='1.5em'
                  variant='solid'
                  colorScheme='green'>
                  {price.toFixed(2)} €
                </Badge>
              </>
            }
          </GridItem>
        </Flex>
        <GridItem textAlign='center' area='cartButton'>
          <Tooltip isDisabled={isMobile ? true : false} label='Add to cart>' placement='bottom' bg='teal.500'>
            <Button
              borderRadius='md'
              size='md'
              variant='outline'
              colorScheme='teal'
              isDisabled={stock > 0 ? false : true}
              onClick={handleAddToCart} >
              <FontAwesomeIcon size='2xl' icon='fa-solid fa-cart-shopping' color='teal' />
            </Button>
          </Tooltip>
        </GridItem>
        <Flex pt='2' height='100%' justifyContent='center' alignItems='center' >
          <GridItem area={'stock'}>
            {stock < 1 ?
              <Text fontSize='1.2em' color='red'>
                Out of stock
              </Text>
              :
              <Text fontSize='1.2em' color='green'>
                Stock: {stock}
              </Text>
            }
          </GridItem>
        </Flex>
      </Grid >
    </Box >
  )
}