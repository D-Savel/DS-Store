import { useState } from "react"
import { Route, Router, Routes } from 'react-router-dom'
import { Link as ReachLink } from 'react-router-dom'
import {
  Box,
  Button,
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
  MenuDivider
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Home from "../pages/Home"
import Products from "../pages/Products"
import Contact from "../pages/Contact"

function Header(props) {

  const [select, setSelect] = useState('')

  return (
    <>
      <Box position="sticky" w="100%" top="0" zIndex="sticky">
        <HStack as="nav" spacing='10px' bg="gray.300" py="1">
          <Link as={ReachLink} to={'/Home'} px="5">Home</Link>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Products
            </MenuButton>
            <MenuList>
              <Link as={ReachLink} to={'/Products'}>
                <MenuItem onClick={() => (setSelect('all'))}>All</MenuItem>
              </Link>
              <MenuDivider />
              <Link as={ReachLink} to={'/Products'}>
                <MenuItem onClick={() => (setSelect('phones'))}>phones</MenuItem>
              </Link>
              <Link as={ReachLink} to={'/Products'} >
                <MenuItem onClick={() => (setSelect('computer'))}>Computer</MenuItem>
              </Link>
              <Link as={ReachLink} to={'/Products'}>
                <MenuItem onClick={() => (setSelect('accessories'))}>accessories</MenuItem>
              </Link>
            </MenuList>
            <Link as={ReachLink} to={'/Contact'} px="5">Contact</Link>
          </Menu>
        </HStack>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products select={select} />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>


    </>
  )
}
export default Header