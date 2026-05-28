import styled from 'styled-components'

type Propriedades = {
  ativo?: boolean
  clicavel?: boolean
}

export const Card = styled.div<Propriedades>`
  background-color: ${(props) => (props.ativo ? '#A2D2FF' : '#ffffff')};
  color: ${(props) => (props.ativo ? '#ffffff' : '#4B5563')};

  border: 1px solid ${(props) => (props.ativo ? '#A2D2FF' : '#E5E7EB')};

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  width: 100%;

  ${(props) =>
    !props.clicavel &&
    `
    cursor: default;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
`

export const Contator = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 24px;
  display: block;
  margin-bottom: 4px;
  line-height: 1;
`

export const Label = styled.label`
  font-family: 'Playwrite IE', cursive;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  line-height: 1.2;
`
