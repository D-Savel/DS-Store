import { useDispatch } from 'react-redux'
import { setSelectCategory } from '../redux/reducers/selectCategorySlice'
import { categories } from '../data/categories'
import { CategoryCard } from "./CategoryCard"
import { Link as ReachLink } from 'react-router-dom'
import {
  Badge,
  Link,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery
} from '@chakra-ui/react'


export const CategoryCardMenu = (props) => {
  const dispatch = useDispatch()
  const [isMobile] = useMediaQuery('(max-width: 780px)')
  const badgeSxProperty = isMobile ?
    { writingMode: "vertical-rl", textOrientation: "upright3" } :
    { writingMode: "horizontal" }

  return (
    <>
      <Badge
        w='95%'
        mt='2'
        borderRadius='md'
        fontSize='1em'
        size='lg'
        py='2'
        variant='solid'
        colorScheme='teal'
        sx={badgeSxProperty}>
        Products
      </Badge>
      {categories.map((category) => {
        return (
          < Menu key={category.id}>
            <Tooltip isDisabled={isMobile ? true : false} label='Click for shopping >' placement='left' bg='teal.500'>
              <Link
                as={ReachLink}
                to={'/Products'}
                _hover={{
                  background: "white",
                  color: "teal.500",
                }}>
                <MenuItem onClick={() => (dispatch(setSelectCategory(category.category)))}>
                  <CategoryCard category={category.category} imgUrl={category.imgUrl} nbProducts={category.nbProducts} />
                </MenuItem>
              </Link>
            </Tooltip>
          </Menu>
        )
      })}
    </>
  )
}