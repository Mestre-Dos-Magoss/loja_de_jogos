import styled from 'styled-components'

import variaveis from '../../../styles/variaveis'
import { Container } from '../../../styles'
import Button from '../../Buttons'

type Props = {
  active: boolean
  id: number
}

export const CategoriaContainer = styled(Container)`
  flex-direction: column;
  align-items: start;
  margin-bottom: 4em;
`
export const CategoriaTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2em;

  svg {
    color: ${variaveis.corBotao};
    margin-right: 8px;
  }
`

export const Categoria = styled.div`
  display: flex;
  width: 640px;
`

export const ButtonsCategoria = styled(Button)<Props>`
  background-color: ${(props) =>
    props.active ? variaveis.corBotaoEfeito : variaveis.corTextoSecundaria};
  color: ${variaveis.corFundo};
  border-radius: 8px;
  margin-right: 12px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active ? variaveis.corBotao : '#828080ff'};
    transition: 0.1s;
  }
`
