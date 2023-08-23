import { configureStore } from '@reduxjs/toolkit'
import takeawayReducer from './Slice'
export const store = configureStore({
  reducer: {
    takeaway: takeawayReducer
  }
})
