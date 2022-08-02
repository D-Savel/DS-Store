import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react'

const CategoryCard = ({ category, imgUrl, nbProducts }) => {
  return (
    <Box px='2' py='2' shadow='md' borderWidth='1px'>
      <Heading fontSize='xl'>{category}</Heading>
      <Image borderRadius='lg'
        py='2'
        src={imgUrl} alt={category} />
      <HStack justifyContent='center'>

        <Badge borderRadius='lg' px='2' size='md' variant='solid' colorScheme='teal'>{nbProducts}</Badge>
        <Text>Items</Text>
      </HStack>
    </Box>
  )
}

export default CategoryCard