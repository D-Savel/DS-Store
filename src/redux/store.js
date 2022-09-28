import { configureStore } from "@reduxjs/toolkit"
import selectCategoryReducer from './reducers/selectCategorySlice'
import cartReducer from "./reducers/cartSlice"

export default configureStore({
  reducer: {
    selectCategory: selectCategoryReducer,
    cart: cartReducer
  },
})