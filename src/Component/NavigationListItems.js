import { Link as ReachLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectCategory } from '../redux/reducers/selectCategorySlice'
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const NavigationListItems = (props) => {

  const dispatch = useDispatch()

  return (
    <Menu>
      <Link fontSize='18' as={ReachLink} to={'/Home'} px='5'>Home</Link>
      <MenuButton size='sm' fontSize='18' as={Button} rightIcon={<ChevronDownIcon />}>
        Products
      </MenuButton>
      <MenuList>
        <Link as={ReachLink} to={'/Products'}>
          <MenuItem onClick={() => (dispatch(setSelectCategory('all')))}>All</MenuItem>
        </Link>
        <MenuDivider />
        <Link as={ReachLink} to={'/Products'}>
          <MenuItem onClick={() => (dispatch(setSelectCategory('phone')))}>Phones</MenuItem>
        </Link>
        <Link as={ReachLink} to={'/Products'} >
          <MenuItem onClick={() => (dispatch(setSelectCategory('computer')))}>Computers</MenuItem>
        </Link>
        <Link as={ReachLink} to={'/Products'}>
          <MenuItem onClick={() => (dispatch(setSelectCategory('accessory')))}>Accessories</MenuItem>
        </Link>
      </MenuList>
      <Link fontSize='18' as={ReachLink} to={'/Offers'} pl='5'>Offers</Link>
      <Link fontSize='18' as={ReachLink} to={'/Contact'} pl='5'>Contact</Link>
    </Menu>
  )
}