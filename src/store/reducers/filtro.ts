import { Prioridade, Status } from '../../enums/Tarefa'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Criterio = 'prioridade' | 'status' | 'todos'

type FiltroState = {
  termo: string
  criterio: Criterio
  valor?: Prioridade | Status
}

type AlterarFiltroPayload = {
  criterio: Criterio
  valor?: Prioridade | Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo(state, action: PayloadAction<string>) {
      state.termo = action.payload
    },

    alterarFiltro(state, action: PayloadAction<AlterarFiltroPayload>) {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
