import {
  Badge,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'

export const CategoryCard = (props) => {
  const { category, imgUrl, nbProducts } = props

  return (

    <Box px='2' py='2' shadow='md' borderWidth='1px' className='category-card'>
      <VStack justifyContent='space-between'>
        <Heading fontSize='xl'>{category.charAt(0).toUpperCase()}{category.slice(1)}</Heading>
        <Center minH='220px' w='auto'>
          <Image
            borderRadius='lg'
            py='2'
            src={imgUrl} alt={category}
            sx={{
              '.category-card:hover &': {
                transition: 'all .2s ease-in -out',
                transform: 'scale(1.08)'
              },
            }} />
        </Center>
        <HStack justifyContent='center'>
          <Badge borderRadius='lg' px='2' size='md' variant='solid' colorScheme='teal'>{nbProducts}</Badge>
          <Text>Items</Text>
        </HStack>
      </VStack>
    </Box>
  )
}