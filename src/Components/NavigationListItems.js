import { useState } from "react"
import { Link as ReachLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Box,
  Button,
  Badge,
  Flex,
  Link,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  StackDivider,
  useColorMode,
  VStack
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

const NavigationListItems = ({ sx, ...props }) => {

  const { setSelect } = props

  return (
    <Menu>
      <Link fontSize="18" as={ReachLink} to={"/Home"} px="5">Home</Link>
      <MenuButton size="sm" fontSize="18" as={Button} rightIcon={<ChevronDownIcon />}>
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
      <Link fontSize="18" as={ReachLink} to={"/Offer"} pl="5">Offer</Link>
      <Link fontSize="18" as={ReachLink} to={"/Contact"} pl="5">Contact</Link>
    </Menu>
  )
}

export default NavigationListItems