import { configureStore } from '@reduxjs/toolkit'
import shoppingCart from './reducers/shoppingCart'
import library from './reducers/library'

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCart,
        library: library
    }
})
export default store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>