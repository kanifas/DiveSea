import { createSlice, createAsyncThunk, /*PayloadAction*/ } from '@reduxjs/toolkit'

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
  async ( _, thunkAPI) => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/nfts/list')

      if (!response.ok) {
        return thunkAPI.rejectWithValue('Failed to fetch nfts list (https://api.coingecko.com/api/v3/nfts/list)')
      }
      const data = await response.json();
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error)
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
        state.error = action.error.message || 'Something went wrong'
      })
  }
})

export default nftSlice.reducer