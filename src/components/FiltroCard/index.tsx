import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { Prioridade, Status } from '../../enums/Tarefa'
import { RootReducer } from '../../store'
import TarefaModel from '../../models/Tarefa'

type Criterio = 'prioridade' | 'status' | 'todos'

export type Propriedades = {
  legenda: string
  criterio: Criterio
  valor?: Prioridade | Status
  ativo?: boolean
}

const CartaoFiltro = ({ legenda, criterio, valor, ativo }: Propriedades) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const tarefas = useSelector((state: RootReducer) => state.tarefas)

  const estaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    let mesmoValor = false

    if (criterio === 'todos') {
      mesmoValor = true
    } else {
      mesmoValor = filtro.valor === valor
    }

    return mesmoCriterio && mesmoValor
  }

  const contaTarefas = () => {
    if (criterio === 'todos') {
      return tarefas.itens.length
    } else if (criterio === 'prioridade' && valor) {
      return tarefas.itens.filter(
        (item: TarefaModel) => item.prioridade === valor
      ).length
    } else if (criterio === 'status' && valor) {
      return tarefas.itens.filter((item: TarefaModel) => item.status === valor)
        .length
    }
    return 0
  }

  const aplicaFiltro = () => {
    dispatch(alterarFiltro({ criterio, valor }))
  }

  const estaSelecionado = estaAtivo()
  const totalTarefas = contaTarefas()

  return (
    <S.Card
      ativo={estaSelecionado}
      clicavel={ativo}
      onClick={ativo ? aplicaFiltro : undefined}
    >
      <S.Contator>{totalTarefas}</S.Contator>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default CartaoFiltro
