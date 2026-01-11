import { configureStore } from '@reduxjs/toolkit'
import { nftReducer } from '@/entities/nft'

export const store = configureStore({
  reducer: {
    nft: nftReducer, // здесь можно подключить несколько reducer-ов
  },
})