import { data } from "../data/data.js"
import {
  Heading,
  Center,
  Box,
  Flex,
  Image,
  Button,
  Text,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from "react"

const Carousel = () => {
  console.log(data)
  const [index, setIndex] = useState(0)
  const nextClick = () => {
    index === data.length - 1 ? setIndex(0) : setIndex((current => current + 1))
  }
  const previousClick = () => {
    index === 0 ? setIndex(data.length - 1) : setIndex((current => current - 1))
  }

  return (
    <Box maxW='800px' h='auto' alignItems='center'>
      <Box px='1' textAlign='center' backgroundColor='gray.300' borderWidth="1px" borderBottomWidth='0px' borderTopRadius="md" py='0'>
        <Flex py='1' justify='space-between' align='center'>
          <Button pt='1' size='xs' colorScheme='gray' variant='outline' onClick={previousClick}>
            <ChevronLeftIcon w={4} h={4} />
            Previous
          </Button>
          <Heading as='h4' size='xs'>
            {data[index].name}
          </Heading>
          <Button pt='1' size='xs' colorScheme='gray' variant='outline' onClick={nextClick}>
            Next
            <ChevronRightIcon w={4} h={4} />
          </Button>
        </Flex>
      </Box>
      <Center px='1' p='1' borderWidth="1px" borderBottomRadius="md" overflow="hidden">
        <Image

          maxW='800px'
          borderRadius='lg'
          src={data[index].imgUrl} alt={data[index].name} />
      </Center>
    </Box>
  )
}

export default Carousel