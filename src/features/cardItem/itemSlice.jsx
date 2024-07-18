
import { createSlice } from '@reduxjs/toolkit'

export const itemSilce = createSlice({
  name: 'cardItem',
  initialState: {
    item: 0,
  },
  reducers: {
    incremenCardItemCount: (state) => { 
      state.item += 1
    },
    // incrementByAmount: (state, action) => {
    //   state.item += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { incremenCardItemCount } = itemSilce.actions

export default itemSilce.reducer