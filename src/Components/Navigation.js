import { useState } from "react"
import NavigationListItems from "./NavigationListItems"
import MobileNavigation from "./MobileNavigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Box,
  Button,
  Badge,
  Container,
  Flex,
  HStack,
  StackDivider,
  useMediaQuery,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const Navigation = (props) => {

  const { setSelect } = props

  const [amount, setAmount] = useState(115.45)
  const [itemsQuantity, setItemsQuantity] = useState(12)

  const [isMobile] = useMediaQuery("(max-width: 720px)")
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box position="sticky" w="100%" top="0" zIndex="sticky" bg="gray.400">
      <Flex align="center" justify="space-between" direction="row">
        <Box as="nav" bg="gray.400" >
          {isMobile ? (

            <MobileNavigation>
              <Flex align="start" justify="space-between" direction="column">
                <NavigationListItems setSelect={setSelect} />
              </Flex>
            </MobileNavigation>

          ) : (
            <NavigationListItems setSelect={setSelect} />
          )}
        </Box>
        <Box>
          {colorMode === "light" ?
            <Button mr="2" color="gray.300" onClick={toggleColorMode} size="sm">
              <MoonIcon color="yellow" w="6" h="6" />
            </Button>
            : <Button mr="2" color="yellow" onClick={toggleColorMode} size="sm">
              <SunIcon color="white" w="6" h="6" />
            </Button>}
          <Badge border="1px" borderColor="gray.200" borderRadiusRight="lg" color="white">
            <Flex direction="row" >
              <HStack mr="2" align="center">
                <Badge p="2" borderRadius="lg" variant="solid" colorScheme="gray">
                  <FontAwesomeIcon size="2xl" icon="fa-solid fa-cart-shopping" color="black" />
                </Badge>
              </HStack>
              <VStack minW="40px" align="center" divider={<StackDivider borderColor="black" />}
                spacing={0.5}>
                <HStack>
                  <span style={{ color: "black" }}>Qty: </span>
                  <Badge px="2" pt="1" borderRadius="lg" variant="solid" colorScheme="green">{itemsQuantity}</Badge>
                </HStack>
                <Badge px="2" pt="1" borderRadius="lg" variant="solid" colorScheme="blue">{amount} €</Badge>
              </VStack>
            </Flex>
          </Badge>
        </Box>
      </Flex >
    </Box >


  )
}

export default Navigation