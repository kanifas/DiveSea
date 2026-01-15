import { createSlice, createAsyncThunk, /*PayloadAction*/ } from '@reduxjs/toolkit'

const API_URL = import.meta.env.VITE_API_URL

export interface nftState {
  items: Array<{id: string, name: string}>
  loading: boolean
  error: undefined | string
}

const initialState: nftState = {
  items: [],
  loading: false,
  error: undefined,
}

export const fetchNftsThunk = createAsyncThunk(
  'nfts/fetchNfts',
  async (/*_, thunkAPI*/) => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(errorBody || response.statusText)
      }
      const data = await response.json();
      return data
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error('Something went wrong')
      }
      // thunkAPI.rejectWithValue(error)
    }
  }
)

export const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNftsThunk.pending, (state) => {
        state.loading = true
        state.error = undefined
      })
      .addCase(fetchNftsThunk.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchNftsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default nftSlice.reducer