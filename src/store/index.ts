import { configureStore } from '@reduxjs/toolkit'
import { Api } from '../services/index'

import shoppingCart from './reducers/shoppingCart'
import library from './reducers/library'
import filtro from './reducers/filtro'
import modal from './reducers/modal'

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCart,
    library: library,
    filtro: filtro,
    modal: modal,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware)
})

export default store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
