import {
  Box,
  Flex,
  useMediaQuery
} from '@chakra-ui/react'
import { Carousel } from '../Component/Carousel'
import { ASideMenu } from '../Component/ASideMenu'

export const Home = (props) => {

  const { setSelect } = props
  const [isMobile] = useMediaQuery('(max-width: 720px)')



  return (
    <>
      {isMobile ? (
        <Box px='1'>
          <Box w='100%' pt='2'>
            <Carousel />
          </Box>
        </Box>
      ) : (
        <Flex pl='2'>
          <Box w='75%' pt='2'>
            <Carousel />
          </Box>
          <Box w='25%' pt='2' align='center'>
            <ASideMenu setSelect={setSelect} />
          </Box>
        </Flex >
      )
      }
    </>
  )
}