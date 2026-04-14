import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'
import { ActionContainer, Avaliatioon } from '../../../styles'

export const CardInLine = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  width: 100%;
  height: 140px;
  padding: 16px;
  margin-bottom: 1em;
  border: 1.4px solid ${variaveis.corTextoSecundaria};
  border-radius: 16px;
  background-color: ${variaveis.cinzaFraco};
  transition: all ease 0.1s;

  &:hover {
    transition: all ease 0.1s;
    border: 1.4px solid ${variaveis.corBotao};
  }
`

export const ImgGame = styled.div`
  max-width: 192px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 8px;
  }
`

export const NameGame = styled.div`
  display: block;
  width: 26%;
  height: 100%;

  p {
    color: ${variaveis.corFundo};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    text-transform: capitalize;
    margin-right: 12px;
  }

  button :last-child {
    margin-right: 8px;
  }
`

export const Avaliacao = styled(Avaliatioon)`
  svg {
    height: 18px;
    width: 18px;
  }
`

export const AvaliacaoTemp = styled(Avaliacao)`
  svg {
    color: ${variaveis.corFundo};
  }
`

export const InfosContainer = styled(ActionContainer)`
  padding-right: 16px;
  margin-bottom: 0.8em;
`
