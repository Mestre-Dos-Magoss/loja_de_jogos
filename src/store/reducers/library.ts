import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Game from '../../models/jogo'

type LibraryState = {
  itens: Game[]
}

const initialState: LibraryState = {
  itens: []
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addGames: (state, action: PayloadAction<Game>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { addGames } = librarySlice.actions
export default librarySlice.reducer
