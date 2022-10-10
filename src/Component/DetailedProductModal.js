import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice'
import { AddToCartButton } from './AddToCartButton'
import { PriceTag } from './PriceTag'
import { LoremIpsum } from 'lorem-ipsum'
import { findProductItemsWithId } from '../utils/findProductItemsWithId'

import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useMediaQuery,
  Text,
} from '@chakra-ui/react'

export const DetailedProductModal = (props) => {
  const { isOpen, onClose, idItem, isCarouselPlaying, setIsCarouselPlaying } = props
  const product = findProductItemsWithId(idItem)
  const { category, name, brand, imgUrl, price, offerPercent, stock, specifications } = product

  const lorem = new LoremIpsum();

  const [isMobile] = useMediaQuery('(max-width: 1070px)')
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    let cartItems = { ...product }
    cartItems.qty = 1
    dispatch(addToCart(cartItems))
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} size='3xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          mb='2'
          onClick={() => {
            onClose()
            if (isCarouselPlaying === false) { setIsCarouselPlaying(!isCarouselPlaying) }
          }} />
        <ModalHeader>
          <Box mt='4' display='flex' justifyContent='space-between' alignItems='center'>
            <Badge mb='1' fontSize='0.7em' px='2' borderRadius='md' variant='solid'>
              {brand}
            </Badge>
            <Text textTransform='capitalize'>{category}</Text>
          </Box>
          <Box mt='2' align='center' justify='center'>
            <span>{name}</span>
            {offerPercent > 0 && (
              <Badge ml='2' fontSize='0.9em' borderRadius='md' variant='solid' colorScheme='red'>
                {offerPercent} % off
              </Badge>
            )}
          </Box>
        </ModalHeader>
        <ModalBody px='1'>
          <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={2}
          >
            <Box display='flex' alignItems='center' justifyContent='center'>
              <GridItem align='center' rowSpan={1} colSpan={2}>
                <Image
                  boxSize='120px'
                  objectFit='contain'
                  borderRadius='lg'
                  src={imgUrl}
                  alt={category}
                />
                {stock < 1 ?
                  <Text fontSize='1.1em' color='red'>
                    Out of stock
                  </Text>
                  :
                  <Text fontSize='1.1em' color='green'>
                    Stock: {stock}
                  </Text>
                }

                <PriceTag offerPercent={offerPercent} price={price} />
              </GridItem>
            </Box>
            <GridItem rowSpan={1} colSpan={4}>
              {specifications.map((item, index) => {
                return (
                  <Text key={index}>
                    <span style={{ fontWeight: 'bold' }}>{lorem.generateWords(item[0])}</span>
                    <span>: {lorem.generateWords(item[1])}</span>
                  </Text>
                )
              })}
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter display='flex' justifyContent='space-between' alignItems='center'>
          <Button
            size='sm'
            colorScheme='red'
            mr='1'
            onClick={() => {
              onClose()
              if (isCarouselPlaying === false) { setIsCarouselPlaying(!isCarouselPlaying) }
            }}>
            Close x
          </Button>
          <AddToCartButton handleAddToCart={handleAddToCart} stock={stock} isMobile={isMobile} />
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}