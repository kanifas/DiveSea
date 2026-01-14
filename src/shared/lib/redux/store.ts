import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import nftReducer from './slices/nftSlice'
import uiReducer from './slices/uiSlice'

export const store = configureStore({
  reducer: {
    nft: nftReducer,
    ui: uiReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export { toggleIsNavMenu } from './slices/uiSlice'

export default store
