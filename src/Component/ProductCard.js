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
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCard = (props) => {
  const { name, brand, category, imgUrl, price, stock, offerPercent } = props
  const offerPrice = (price * (100 - offerPercent) / 100)

  return (
    <Box px='2' py='2' shadow='md' borderWidth='1px' className='category-card'>
      <Grid
        templateAreas={
          `'category category' 'image productInfo' 'image price''stock cartButton'`
        }
        gridTemplateRows={'40px 120px 1fr 50px'}
        gridTemplateColumns={'1fr 1fr'} gap='1'>
        <GridItem area='category'>
          <HStack justify='center'>
            <Heading py='2' px='2' fontSize='1.5em'>{category.charAt(0).toUpperCase()}{category.slice(1, -1)}</Heading>
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
          <Image
            borderRadius='lg'
            py='2'
            src={imgUrl} alt={category}
          />
        </GridItem>
        <Flex justify='top' align='center'>
          <GridItem area='productInfo'>
            <Flex direction='column' align='center'>
              <Badge
                mb='3'
                px='2'
                w='90%'
                fontSize='1em'
                borderRadius='md'
                variant='solid'
              >
                {brand.charAt(0).toUpperCase()}{brand.slice(1)}
              </Badge>
              <Heading fontSize='1.4em'>{name}</Heading>
            </Flex>
          </GridItem>
        </Flex>
        <Flex justify='center' align='center'>
          <GridItem area='price'>
            {offerPercent > 0 ?
              <>
                <Text as='s' fontSize='1.1em' color='grey' px='2'>
                  {price} €
                </Text>
                <Badge
                  px='2'
                  w='85%'
                  borderRadius='md'
                  fontSize='1.5em'
                  variant='solid'
                  colorScheme='red'>
                  {offerPrice} €
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
                  {price} €
                </Badge>
              </>
            }
          </GridItem>
        </Flex>
        <GridItem area='cartButton'>
          <Flex justify='center' alignContent='end' pt='1'>
            <Tooltip label='Add to cart>' placement='bottom' bg='teal.500'>
              <Button
                py='2'
                borderRadius='md'
                size='md'
                variant='outline'
                colorScheme='teal'>
                <FontAwesomeIcon size='2xl' icon='fa-solid fa-cart-shopping' color='teal' />
              </Button>
            </Tooltip>
          </Flex>
        </GridItem>
        <Flex justify='center' align='center' pt='3'>
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

export default ProductCard