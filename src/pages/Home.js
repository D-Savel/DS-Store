import {
  Badge,
  Box,
  Flex,
  useMediaQuery
} from '@chakra-ui/react'
import { Carousel } from '../Component/Carousel'
import { CategoryCardMenu } from '../Component/CategoryCardMenu'
import { OfferItems } from '../Component/OfferItems'

export const Home = (props) => {

  const [isMobile] = useMediaQuery('(max-width: 820px)')
  const menuCategoryHeight = isMobile ? "630px" : "730px"

  return (
    <>
      {isMobile ? (
        <Box px='1' pt='2'>
          <Carousel />
          <Box py='2'>
            <Box display='flex' flexWrap='nowrap' sx={{ overflow: "auto" }}>
              <CategoryCardMenu />
            </Box>
          </Box>
          <Box display='flex' flexWrap='nowrap' sx={{ overflow: "auto" }}>
            <Badge
              my='2'
              borderRadius='md'
              fontSize='1em'
              size='lg'
              py='2'
              variant='solid'
              colorScheme='teal'
              sx={{
                writingMode: "vertical-lr",
                textOrientation: "upright3"
              }}>
              Offers
            </Badge>
            <OfferItems />
          </Box>
        </Box>
      ) : (
        <Flex gap='1' px='1'>
          <Box display='flex' flexDirection='column' w='75%' pt='2' >
            <Carousel />
            <OfferItems />
          </Box>
          <Box display='flex' flexDirection='column' w='25%' alignItems='center' textAlign='center' sx={{ overflow: "auto", height: menuCategoryHeight }}>
            <CategoryCardMenu />
          </Box>
        </Flex >
      )
      }

    </>
  )
}