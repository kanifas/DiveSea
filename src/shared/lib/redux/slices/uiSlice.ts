import { createSlice } from '@reduxjs/toolkit'

export interface UiState {
  isNavMenuOpen: boolean
}

const initialState: UiState = {
  isNavMenuOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleIsNavMenu: (state /*, action: PayloadAction<boolean>*/) => { state.isNavMenuOpen = !state.isNavMenuOpen },
  },
})

export const { toggleIsNavMenu } = uiSlice.actions

export default uiSlice.reducer