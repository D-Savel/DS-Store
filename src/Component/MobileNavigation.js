import { Flex, IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavigationListItems } from './NavigationListItems'

export const MobileNavigation = (props) => {
  const { setSelect } = props

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Open mobile menu'
        icon={<HamburgerIcon />}
        variant='outline'
        ml='1'
      >
      </MenuButton>
      <MenuList>
        <Flex align='start' direction='column'>
          <NavigationListItems setSelect={setSelect} />
        </Flex>
      </MenuList>
    </Menu>
  )
}