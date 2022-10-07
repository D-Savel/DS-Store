import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice'
import { PriceTag } from './PriceTag'
import { AddToCartButton } from './AddToCartButton'
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,

  Image,
  Text,
  useMediaQuery,
  useDisclosure
} from '@chakra-ui/react'
import { DetailedProductModal } from './DetailedProductModal'

export const ProductCard = (props) => {
  const { id, category, name, brand, imgUrl, price, offerPercent, stock, specifications } = props
  const product = { id: id, category: category, name: name, brand: brand, imgUrl: imgUrl, price: price, offerPercent: offerPercent, stock: stock, specifications: specifications }
  const dispatch = useDispatch()
  const [isMobile] = useMediaQuery('(max-width: 1070px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleAddToCart = () => {
    let cartItems = { ...product }
    cartItems.qty = 1
    dispatch(addToCart(cartItems))
  }

  return (
    <Box py='2' shadow='md' borderRadius='md' borderWidth='1px'>
      < Grid
        h='300px'
        templateAreas={`'category category' 'image productInfo' 'stock cartButton'`}
        gridTemplateRows={'1fr 8fr 1fr'}
        gridTemplateColumns={'1fr 1fr'} gap='1' >
        <GridItem area='category' textAlign='center'>
          <HStack justifyContent='center'>
            <Heading as='h3' px='2' textTransform='capitalize' fontSize='1.4em'>{category}</Heading>
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
        <Box as='button'
          mt='1' w='190px'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='space-evenly'
          _hover={{
            background: "white",
            color: "teal.500",
          }}
          onClick={onOpen}
        >
          <DetailedProductModal isOpen={isOpen} onClose={onClose} idItem={id} />
          <GridItem area='productInfo'>
            <Box textAlign='center'>
              <Badge
                px='2'
                fontSize='1em'
                borderRadius='md'
                variant='solid'
              >
                {brand}
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
              <Text fontSize='1.1em' color='red'>
                Out of stock
              </Text>
              :
              <Text fontSize='1.1em' color='green'>
                Stock: {stock}
              </Text>
            }
          </Flex>
        </GridItem>
        <GridItem textAlign='center' area='cartButton'>
          <AddToCartButton handleAddToCart={handleAddToCart} stock={stock} isMobile={isMobile} />
        </GridItem>
      </Grid >
    </Box >
  )
}