import { createSlice } from "@reduxjs/toolkit"

export const selectSlice = createSlice({
  name: 'select',
  initialState: {
    value: 'all categories'
  },
  reducers: {
    setSelect(state, { payload }) {
      state.value = payload;
    }
  }
})

export const { setSelect } = selectSlice.actions

export default selectSlice.reducer