import { createSlice } from '@reduxjs/toolkit'

export const nftSlice = createSlice({
  name: 'nft',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => { state.value += 1 }, // увеличение на 1
    decrement: (state) => { state.value -= 1 }, // уменьшение на 1
    incrementByAmount: (state, action) => { state.value += action.payload } // на произвольное значение
  },
})

export const { increment, decrement, incrementByAmount } = nftSlice.actions
export default nftSlice.reducer