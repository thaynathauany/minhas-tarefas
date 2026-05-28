import styled from 'styled-components'

export const Aside = styled.aside<{ menuCompletoVisivel: boolean }>`
  padding: 16px;
  background-color: #f1f5f9;
  height: 100vh;
  border-right: 1px solid #e5e7eb;
  opacity: ${(props) => (props.menuCompletoVisivel ? 1 : 0.5)};
  pointer-events: ${(props) => (props.menuCompletoVisivel ? 'auto' : 'none')};
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  background-color: #ffffff;
  color: #2d3748;
  font-family: 'Inter', sans-serif;

  &::placeholder {
    font-family: 'Playwrite IE', cursive;
    font-size: 12px;
    color: #9ca3af;
  }
`
