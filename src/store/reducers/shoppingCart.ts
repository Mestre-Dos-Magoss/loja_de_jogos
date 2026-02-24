import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Game from '../../models/jogo'

type ShoppingCartState = {
  itens: Game[]
}

const initialState: ShoppingCartState = {
  itens: []
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
      add: (state, action: PayloadAction<Game>) => {
        const gameExisting = state.itens.find((game) => game.id === action.payload.id)

        if(gameExisting){
          alert('Você já possuí este jogo!')
        }
        else{
            state.itens.push(action.payload)
        }
      },
      remove: (state, action: PayloadAction<{id: number }>) => {
        state.itens = state.itens.filter((game) => game.id !== action.payload.id)
      }
    }
})
export const { add, remove } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer