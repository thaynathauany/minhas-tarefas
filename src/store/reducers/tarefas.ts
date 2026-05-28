import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { Prioridade, Status } from '../../enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Redux',
      prioridade: Prioridade.URGENTE,
      status: Status.PENDENTE,
      descricao: 'Rever módulo 31'
    },
    {
      id: 2,
      titulo: 'Fazer compras',
      prioridade: Prioridade.IMPORTANTE,
      status: Status.EM_ANDAMENTO,
      descricao: 'Comprar leite, pão e ovos'
    },
    {
      id: 3,
      titulo: 'Limpar a casa',
      prioridade: Prioridade.NORMAL,
      status: Status.CONCLUIDA,
      descricao: 'Limpar a sala e os quartos'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: initialState.itens
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const index = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )
      state.itens[index] = action.payload
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefa = action.payload
      const lastTarefa = state.itens[state.itens.length - 1]
      const newId = lastTarefa ? lastTarefa.id + 1 : 1
      state.itens.push({ ...tarefa, id: newId })
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer
