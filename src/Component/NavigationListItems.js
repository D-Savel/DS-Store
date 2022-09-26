import { Link as ReachLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelect } from '../redux/reducers/selectSlice'
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
          <MenuItem onClick={() => (dispatch(setSelect('all categories')))}>All</MenuItem>
        </Link>
        <MenuDivider />
        <Link as={ReachLink} to={'/Products'}>
          <MenuItem onClick={() => (dispatch(setSelect('phones')))}>Phones</MenuItem>
        </Link>
        <Link as={ReachLink} to={'/Products'} >
          <MenuItem onClick={() => (dispatch(setSelect('computers')))}>Computers</MenuItem>
        </Link>
        <Link as={ReachLink} to={'/Products'}>
          <MenuItem onClick={() => (dispatch(setSelect('accessories')))}>Accessories</MenuItem>
        </Link>
      </MenuList>
      <Link fontSize='18' as={ReachLink} to={'/Offer'} pl='5'>Offers</Link>
      <Link fontSize='18' as={ReachLink} to={'/Contact'} pl='5'>Contact</Link>
    </Menu>
  )
}