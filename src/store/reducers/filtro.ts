import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enuns from '../../utils/enuns/categorias'

type FiltroState = {
  termo?: string
  categoria: enuns.Categoria
}

const initialState: FiltroState = {
  termo: '',
  categoria: enuns.Categoria.TODOS
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraCategoria: (state, action: PayloadAction<enuns.Categoria>) => {
      state.categoria = action.payload
    },
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraCategoria, alteraTermo } = filtroSlice.actions
export default filtroSlice.reducer
