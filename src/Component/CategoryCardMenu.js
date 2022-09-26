import { useDispatch } from 'react-redux'
import { setSelect } from '../redux/reducers/selectSlice'
import { categories } from '../data/categories'
import { CategoryCard } from "./CategoryCard"
import { Link as ReachLink } from 'react-router-dom'
import {
  List,
  Link,
  Menu,
  MenuItem,
  Tooltip
} from '@chakra-ui/react'

export const CategoryCardMenu = (props) => {
  const dispatch = useDispatch()

  return (
    <>
      {categories.map((category) => {
        return (
          <List key={category.id}>
            < Menu gap='1'>
              <Tooltip label='Click for shopping >' placement='left' bg='teal.500'>
                <Link
                  as={ReachLink}
                  to={'/Products'}
                  _hover={{
                    background: "white",
                    color: "teal.500",
                  }}>
                  <MenuItem onClick={() => (dispatch(setSelect(category.category)))}>
                    <CategoryCard category={category.category} imgUrl={category.imgUrl} nbProducts={category.nbProducts} />
                  </MenuItem>
                </Link>
              </Tooltip>
            </Menu>
          </List>
        )
      })}
    </>
  )
}