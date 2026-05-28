import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Prioridade, Status } from '../../enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { Formulario, Campo, Selecao, Botao, BotaoVoltar } from './styles'
import { RootReducer } from '../../store'

const FormularioRegistro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(Prioridade.NORMAL)

  const registraTarefa = (evento: React.FormEvent) => {
    evento.preventDefault()

    const jaExisteTarefa = tarefas.find(
      (t) => t.titulo.toLowerCase() === titulo.toLowerCase()
    )

    if (jaExisteTarefa) {
      alert('Já existe uma tarefa com este nome')
    } else {
      dispatch(
        cadastrar({
          titulo,
          prioridade,
          descricao,
          status: Status.PENDENTE
        })
      )
      navigate('/')
    }
  }

  return (
    <Formulario onSubmit={registraTarefa}>
      <Link to="/">
        <BotaoVoltar type="button">Voltar para lista</BotaoVoltar>
      </Link>
      <Campo
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        type="text"
        placeholder="Título da tarefa"
      />
      <Campo
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        as="textarea"
        placeholder="Descrição da tarefa"
      ></Campo>
      <Selecao
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value as Prioridade)}
      >
        {Object.values(Prioridade).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </Selecao>
      <Botao type="submit">Cadastrar</Botao>
    </Formulario>
  )
}

export default FormularioRegistro
