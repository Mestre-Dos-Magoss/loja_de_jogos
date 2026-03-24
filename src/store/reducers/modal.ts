import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Game from '../../models/jogo'

type ModalState = {
  isOpen: boolean
  game?: Game
}

const initialState: ModalState = {
  isOpen: false
}

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    viewGame: (state, action: PayloadAction<Game>) => {
      state.game = action.payload
    }
  }
})

export const { open, close, viewGame } = modal.actions
export default modal.reducer
