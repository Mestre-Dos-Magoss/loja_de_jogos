import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Game from '../../models/jogo'

type FavoritoState = {
  item: Game[]
}

const initialState: FavoritoState = {
  item: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionaJogo: (state, action: PayloadAction<Game>) => {
      const existGame = state.item.find((item) => item.id === action.payload.id)

      if (existGame) {
        console.log('Game já adicionado')
      } else {
        state.item.push(action.payload)
      }
    },
    removeJogo: (state, action: PayloadAction<Game>) => {
      state.item = state.item.filter((game) => game.id !== action.payload.id)
    }
  }
})

export const { adicionaJogo, removeJogo } = favoritoSlice.actions
export default favoritoSlice.reducer
