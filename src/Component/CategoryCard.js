import {
  Badge,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react'

export const CategoryCard = (props) => {
  const { category, imgUrl, nbProducts } = props

  return (

    <Box
      w='220px'
      borderRadius='md'
      borderWidth='1px'
      shadow='md'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      py='1'
      minH='250px'
      className='category-card'>
      <Heading textTransform='capitalize' fontSize='xl'>{category}</Heading>
      <Center minH='80px' w='auto'>
        <Image
          boxSize='200px'
          objectFit='contain'
          borderRadius='lg'
          py='2'
          src={imgUrl}
          alt={category}
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
    </Box>
  )
}