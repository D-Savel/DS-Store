import {
  Box,
  Flex,
  useMediaQuery
} from '@chakra-ui/react'
import ASideMenu from '../Component/ASideMenu'



function Offers(props) {

  const { setSelect } = props
  const [isMobile] = useMediaQuery('(max-width: 720px)')


  return (
    <>
      <p>Offers</p>
      {
        isMobile ? (
          <Box px='1'>
            <Box w='100%' pt='2'>
              <p> offer products cards </p>
            </Box>
          </Box>
        ) : (
          <Flex pl='2'>
            <Box w='75%' pt='2'>
              <p> offer products cards </p>
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

export default Offers