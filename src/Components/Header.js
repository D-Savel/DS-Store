import { useState } from "react"
import { Link as ReachLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Box,
  Button,
  Badge,
  Container,
  Flex,
  Link,
  Center,
  VStack,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  StackDivider,
  Stack,
  Spacer,
  useColorMode
} from "@chakra-ui/react"
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"

function Header(props) {

  const { setSelect } = props

  const [amount, setAmount] = useState(0)
  const [itemsQuantity, setItemsQuantity] = useState(0)
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box position="sticky" w="100%" top="0" zIndex="sticky">
        <Box as="nav" bg="gray.400" px="1" py="1" >
          <Flex align="center" justify="space-between" direction="row">
            <Box>
              <Button mr="8" colorScheme="gray" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon color="black" w="6" h="6" /> : <SunIcon color="yellow" w="8" h="8" />}
              </Button>
              <Link fontSize="18" as={ReachLink} to={"/Home"} px="5">Home</Link>
              <Menu>
                <MenuButton fontSize="18" as={Button} rightIcon={<ChevronDownIcon />}>
                  Products
                </MenuButton>
                <MenuList>
                  <Link as={ReachLink} to={"/Products"}>
                    <MenuItem onClick={() => (setSelect("all"))}>All</MenuItem>
                  </Link>
                  <MenuDivider />
                  <Link as={ReachLink} to={"/Products"}>
                    <MenuItem onClick={() => (setSelect("phones"))}>Phones</MenuItem>
                  </Link>
                  <Link as={ReachLink} to={"/Products"} >
                    <MenuItem onClick={() => (setSelect("computer"))}>Computer</MenuItem>
                  </Link>
                  <Link as={ReachLink} to={"/Products"}>
                    <MenuItem onClick={() => (setSelect("accessories"))}>Accessories</MenuItem>
                  </Link>
                </MenuList>
                <Link fontSize="18" as={ReachLink} to={"/Offer"} px="5">Offer</Link>
                <Link fontSize="18" as={ReachLink} to={"/Contact"} px="5">Contact</Link>
              </Menu>
            </Box>
            <Flex direction="row" >
              <HStack mx="2" align="center">
                <Badge p="2" borderRadius="lg">
                  <FontAwesomeIcon size="2xl" icon="fa-solid fa-cart-shopping" />
                </Badge>
              </HStack>
              <VStack mx="2" align="center" divider={<StackDivider borderColor="black" />}
                spacing={1}>
                <Badge borderRadius="lg" minW='50' color='black' fontSize="12" pr="1" pt="1" variant="solid" colorScheme="whiteAlpha">{itemsQuantity}</Badge>
                <Badge borderRadius="lg" minW='50' color='black' fontSize="12" pr="1" pt="1" variant="solid" colorScheme="whiteAlpha">{amount} €</Badge>
              </VStack>
            </Flex>
          </Flex>
        </Box>
      </Box >



    </>
  )
}
export default Header