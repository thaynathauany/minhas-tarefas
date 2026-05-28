import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const estado = useSelector((state: RootReducer) => state.tarefas)
  const filtro = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    let tarefasFiltradas = estado.itens

    if (filtro.termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo
            .toLocaleLowerCase()
            .search((filtro.termo || '').toLocaleLowerCase()) >= 0
      )
    }

    if (filtro.criterio === 'prioridade') {
      if (filtro.valor !== undefined && filtro.valor !== null) {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === filtro.valor
        )
      }
    } else if (filtro.criterio === 'status') {
      if (filtro.valor !== undefined && filtro.valor !== null) {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === filtro.valor
        )
      }
    }

    return tarefasFiltradas
  }

  const tarefasExibidas = filtraTarefas()
  const quantidade = tarefasExibidas.length

  let complemento = ''
  if (filtro.criterio === 'prioridade' || filtro.criterio === 'status') {
    const displayValue =
      filtro.valor !== undefined && filtro.valor !== null
        ? String(filtro.valor)
        : ''
    complemento = ` (${filtro.criterio}: ${displayValue})`
  }

  let mensagem = `${quantidade} tarefa(s) encontrada(s)`

  if (filtro.termo) {
    mensagem += ` com o termo "${filtro.termo}"`
  }
  mensagem += complemento
  mensagem += '.'

  return (
    <S.Container>
      <S.Message>{mensagem}</S.Message>
      <ul>
        {tarefasExibidas.map((tarefa, index) => (
          <Tarefa key={index} {...tarefa} />
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas
