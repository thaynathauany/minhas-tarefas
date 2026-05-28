import styled from 'styled-components'
import paletaCores from '../../styles/variaveis'
import { Prioridade, Status } from '../../enums/Tarefa'

type TagProps = {
  prioridade?: Prioridade
  status?: Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps) {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === Prioridade.URGENTE) return paletaCores.perigo
    if (props.prioridade === Prioridade.IMPORTANTE) return paletaCores.amarelo
    if (props.prioridade === Prioridade.NORMAL) return paletaCores.cinza
  } else if (props.parametro === 'status') {
    if (props.status === Status.PENDENTE) return paletaCores.perigo
    if (props.status === Status.EM_ANDAMENTO) return paletaCores.amarelo
    if (props.status === Status.CONCLUIDA) return paletaCores.sucesso
  }
  return paletaCores.cinza
}

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
`

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #2d3748;
  margin-left: 8px;
`

export const ContainerTag = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  font-family: 'Playwrite IE', cursive;
  font-size: 12px;
  padding: 4px 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  color: #ffffff;
  border-radius: 6px;
`

export const Descricao = styled.textarea`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #4b5563;
  width: 100%;
  border: none;
  background-color: transparent;
  margin-bottom: 16px;
  resize: none;
  display: block;
  outline: none;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
  display: flex;
  gap: 8px;
`

export const Botao = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${paletaCores.texto};
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${paletaCores.sucesso};
  color: ${paletaCores.texto};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${paletaCores.perigo};
`
