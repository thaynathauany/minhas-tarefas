import styled from 'styled-components'
import * as variables from '../../styles/variaveis'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Message = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${variables.default.texto};
  padding: 16px;
`
