import { useDispatch, useSelector } from 'react-redux'
import CartaoFiltro from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { Status, Prioridade } from '../../enums/Tarefa'

type Propriedades = {
  menuCompletoVisivel: boolean
}

const BarraLateral = ({ menuCompletoVisivel }: Propriedades) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside menuCompletoVisivel={menuCompletoVisivel}>
      <div>
        <S.Campo
          type="text"
          placeholder="O que precisa ser feito?"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
          disabled={!menuCompletoVisivel}
        />
        <S.Filtros>
          <CartaoFiltro
            valor={Status.PENDENTE}
            criterio="status"
            legenda="pendentes"
            ativo={menuCompletoVisivel}
          />
          <CartaoFiltro
            valor={Status.CONCLUIDA}
            criterio="status"
            legenda="concluídas"
            ativo={menuCompletoVisivel}
          />
          <CartaoFiltro
            valor={Prioridade.URGENTE}
            criterio="prioridade"
            legenda="urgentes"
            ativo={menuCompletoVisivel}
          />
          <CartaoFiltro
            valor={Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="importantes"
            ativo={menuCompletoVisivel}
          />
          <CartaoFiltro
            valor={Prioridade.NORMAL}
            criterio="prioridade"
            legenda="normal"
            ativo={menuCompletoVisivel}
          />
          <CartaoFiltro
            criterio="todos"
            legenda="todas"
            ativo={menuCompletoVisivel}
          />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
