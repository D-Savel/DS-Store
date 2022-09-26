import { configureStore } from "@reduxjs/toolkit"
import selectReducer from './reducers/selectSlice'

export default configureStore({
  reducer: {
    select: selectReducer
  }
})