import { useDispatch } from "react-redux"
import { categories } from '../data/categories'
import {
  Select
} from '@chakra-ui/react'
import { setSelectCategory } from "../redux/reducers/selectCategorySlice"


export const CategorySelect = (props) => {
  const { selectedCategory } = props

  const dispatch = useDispatch()
  const handleSelectCategory = e => dispatch(setSelectCategory(e.target.value))

  return (
    < Select
      pr='2'
      variant='unstyled'
      w='max-content'
      fontWeight='extrabold'
      fontSize='0.8em'
      textTransform='capitalize'
      value={selectedCategory}
      onChange={handleSelectCategory} >
      {
        categories.map((category) => {
          return (
            <option key={category.id} value={category.category}>{category.category}</option>
          )
        })
      }
    </Select >
  )
}