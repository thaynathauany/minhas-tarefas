import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Status } from '../../enums/Tarefa'

type Propriedades = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Propriedades) => {
  const dispatch = useDispatch()
  const [estaEmEdicao, setEstaEmEdicao] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [statusLocal, setStatusLocal] = useState(status)

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelaEdicao() {
    setEstaEmEdicao(false)
    setDescricao(descricaoOriginal)
  }

  function mudaStatus(evento: React.ChangeEvent<HTMLInputElement>) {
    setStatusLocal(evento.target.checked ? Status.CONCLUIDA : Status.PENDENTE)
    dispatch(
      editar({
        id,
        titulo,
        prioridade,
        status: evento.target.checked ? Status.CONCLUIDA : Status.PENDENTE,
        descricao
      })
    )
  }

  return (
    <S.Card>
      <S.Cabecalho>
        <input
          type="checkbox"
          checked={statusLocal === Status.CONCLUIDA}
          onChange={mudaStatus}
        />
        <S.Titulo>{titulo}</S.Titulo>
      </S.Cabecalho>
      <S.ContainerTag>
        <S.Tag parametro="prioridade" prioridade={prioridade}>
          {prioridade}
        </S.Tag>
        <S.Tag parametro="status" status={statusLocal}>
          {statusLocal}
        </S.Tag>
      </S.ContainerTag>
      <S.Descricao
        disabled={!estaEmEdicao}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraDeAcoes>
        {estaEmEdicao ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    titulo,
                    prioridade,
                    status: statusLocal,
                    descricao
                  })
                )
                setEstaEmEdicao(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                cancelaEdicao()
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEmEdicao(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}
export default Tarefa
