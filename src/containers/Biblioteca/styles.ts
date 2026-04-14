import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../components/Buttons/styles'
import { ListContainer } from '../../components/Loja/Lista_de_jogos/styles'

export const BibliotecaCheia = styled.div`
  width: 100%;
  padding: 32px 16px;

  ${ListContainer} {
    gap: 6px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  text-transform: capitalize;

  p {
    color: ${variaveis.corFundo};
  }

  svg {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    color: ${variaveis.corBotao};
  }
`

export const CardsContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;
  margin-bottom: 2em;
`

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2em;

  div {
    display: flex;
    column-gap: 1em;
  }

  ${Botao} {
    padding: 6px 16px;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    border-radius: 8px;
    background-color: ${variaveis.corTextoSecundaria}; //if select should be purple
    color: ${variaveis.corFundo};

    svg {
      margin-top: 2px;
      margin-bottom: 2px;
      width: 24px;
      height: 24px;
    }
  }
`

export const BibliotecaVazia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  svg {
    width: 96px;
    height: 96px;
    color: ${variaveis.corTextoSecundaria};
    margin-bottom: 1em;
  }
`
