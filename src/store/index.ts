import { configureStore } from '@reduxjs/toolkit'
import shoppingCart from './reducers/shoppingCart'
import library from './reducers/library'
import { Api } from '../services/index'

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCart,
    library: library,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware)
})

export default store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
