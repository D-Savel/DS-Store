import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice'
import { PriceTag } from './PriceTag'
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
  const dispatch = useDispatch()
  const [isMobile] = useMediaQuery('(max-width: 1070px)')

  const handleAddToCart = () => dispatch(addToCart({ id: id, category: category, name: name, brand: brand, imgUrl: imgUrl, price: price, offerPercent: offerPercent, stock: stock, qty: 1 }))

  return (
    <Box px='1' py='2' shadow='md' borderWidth='1px' className='category-card'>
      < Grid
        h='300px'
        templateAreas={`'category category' 'image productInfo' 'stock cartButton'`}
        gridTemplateRows={'1fr 8fr 1fr'}
        gridTemplateColumns={'1fr 1fr'} gap='1' >
        <GridItem area='category' textAlign='center'>
          <HStack justifyContent='center'>
            <Heading px='2' fontSize='1.6em'>{category.charAt(0).toUpperCase()}{category.slice(1)}</Heading>
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
        <Box display='flex' alignItems='center' justifyContent='center'>
          <GridItem area={'image'}>
            <Image
              boxSize='190px'
              objectFit='contain'
              borderRadius='lg'
              src={imgUrl}
              alt={category}
            />
          </GridItem>
        </Box>
        <Box mt='2' display='flex' flexDirection='column' alignItems='center' justifyContent='space-evenly'>
          <GridItem area='productInfo'>
            <Box textAlign='center'>
              <Badge
                px='2'
                fontSize='1em'
                borderRadius='md'
                variant='solid'
              >
                {brand.charAt(0).toUpperCase()}{brand.slice(1)}
              </Badge>
            </Box>
            <Box pt='1' textAlign='center'>
              <Text fontSize='1.3em'>{name}</Text>
            </Box>
            <Box textAlign='center'>
              <PriceTag offerPercent={offerPercent} price={price} />
            </Box>
          </GridItem>
        </Box>
        <GridItem area={'stock'}>
          <Flex justifyContent='center' alignItems='start' >
            {stock < 1 ?
              <Text fontSize='1.3em' color='red'>
                Out of stock
              </Text>
              :
              <Text fontSize='1.3em' color='green'>
                Stock: {stock}
              </Text>
            }
          </Flex>
        </GridItem>
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
      </Grid >
    </Box >
  )
}