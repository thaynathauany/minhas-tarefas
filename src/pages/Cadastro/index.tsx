import BarraLateral from '../../containers/BarraLateral'
import { MainContainer, Title } from './styles'
import FormularioCadastro from '../../components/FormularioCadastro'

const Cadastro = () => {
  return (
    <>
      <BarraLateral menuCompletoVisivel={false} />
      <MainContainer>
        <Title>Nova Tarefa</Title>
        <FormularioCadastro />
      </MainContainer>
    </>
  )
}

export default Cadastro
