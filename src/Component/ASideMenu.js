import { categories } from '../data/categories'
import CategoryCard from "./CategoryCard"
import { Link as ReachLink } from 'react-router-dom'
import {
  Badge,
  Box,
  List,
  Link,
  Menu,
  MenuItem,
  Tooltip
} from '@chakra-ui/react'

const ASideMenu = (props) => {
  const { setSelect } = props

  return (
    <Box sx={{ overflow: "scroll", height: "100vh" }}>
      <Badge w='90%' borderRadius='md' fontSize='1em' size='lg' py='1' variant='solid' colorScheme='teal'>
        Products
      </Badge>
      {categories.map((category) => {
        return (
          <List key={category.id}>
            < Menu >
              <Tooltip label='Click for shopping >' placement='left' bg='teal.500'>
                <Link
                  as={ReachLink}
                  to={'/Products'}
                  _hover={{
                    background: "white",
                    color: "teal.500",
                  }}>
                  <MenuItem onClick={() => (setSelect(category.category))}>
                    <CategoryCard category={category.category} imgUrl={category.imgUrl} nbProducts={category.nbProducts} />
                  </MenuItem>
                </Link>
              </Tooltip>
            </Menu>
          </List>
        )
      })}
    </Box >
  )
}

export default ASideMenu