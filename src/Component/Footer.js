import {
  Box,
  Center
} from '@chakra-ui/react'


export const Footer = (props) => {
  return (
    <Box mt='2' py='1' position='sticky' w='100%' bottom='0' zIndex='sticky' bg='gray.300'>
      <Center>my footer</Center>
    </Box>
  )
}