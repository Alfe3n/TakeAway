import { CreateSlice, current } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'
const initialState = {
  category: ''
}

export const takeawaySlice = CreateSlice({
  name: 'takeaway',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    }
  }
})
export const { setCategory } = takeawaySlice.actions
export default takeawaySlice.reducer
