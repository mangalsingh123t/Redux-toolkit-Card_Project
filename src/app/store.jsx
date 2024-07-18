import { configureStore } from '@reduxjs/toolkit'
import  cardItemReducer  from '../features/cardItem/itemSlice'
export const Store = configureStore({
  reducer: {
    cardItem: cardItemReducer,
  },
})