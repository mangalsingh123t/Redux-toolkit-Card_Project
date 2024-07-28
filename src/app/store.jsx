import { configureStore } from '@reduxjs/toolkit'
import  cardItemReducer  from '../features/cardItem/itemSlice'
import { productApi } from '../services/Product'

export const Store = configureStore({
  reducer: {
    cardItem: cardItemReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})