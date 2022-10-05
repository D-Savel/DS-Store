import { createSlice } from "@reduxjs/toolkit"

export const selectCategorySlice = createSlice({
  name: 'selectCategory',
  initialState: { value: 'all' },
  reducers: {
    setSelectCategory(state, action) {
      state.value = action.payload;
    }
  }
})

export const { setSelectCategory } = selectCategorySlice.actions

export default selectCategorySlice.reducer