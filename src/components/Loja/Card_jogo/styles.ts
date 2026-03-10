import styled from 'styled-components'
import Button from '../../Buttons'
import {
  Avaliatioon,
  BotaoAcao,
  FavoritarContainer,
  PriceNovo,
  TagDesconto
} from '../../../styles'
import variaveis from '../../../styles/variaveis'
import { Botao } from '../../Buttons/styles'
import { PropsPopUp } from '.'

type Props = {
  itsInTheStore: boolean
}

export const CardGame = styled.div<Props>`
  object-fit: cover;
  height: ${(props) => (props.itsInTheStore ? '340px' : '286px')};
  margin-bottom: 4em;
  border: 1.4px solid ${variaveis.corTextoSecundaria};
  border-radius: 8px;
  background-color: ${variaveis.corCard};
  transition: 0.1s;

  &:hover {
    transition: 0.1s;
    border: 1.4px solid ${variaveis.corBotao};
  }
`
export const CardIMG = styled.div`
  position: relative;
  width: 100%;
  height: 160px;

  img {
    width: 304px;
    height: 160px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`

export const TagDescontoo = styled(TagDesconto)`
  padding: 4px 8px;
  max-width: 48px;
`

export const ContainerDescription = styled.div`
  display: block;
  margin: 16px 16px;

  h4 {
    color: ${variaveis.corFundo};
  }
`

export const ButtonCart = styled(Button)`
  max-width: 40px;
  padding: 4px 0;
  border-radius: 8px;
  background-color: ${variaveis.corBotaoEfeito};

  svg {
    color: ${variaveis.corFundo};
    width: 16px;
    height: 16px;
  }
`

export const HorasJogadas = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  p {
    color: ${variaveis.corFundo};
  }

  svg {
    color: ${variaveis.corFundo};
    width: 16px;
    height: 16px;
  }
`

export const Jogar = styled.div`
  width: 100%;
`

export const AvaliacoesBiblioteca = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  p {
    color: ${variaveis.corFundo};
  }
`

export const avaliationsIcone = styled(Avaliatioon)`
  svg {
    width: 16px;
    height: 16px;
  }
`
export const ContainerPopUp = styled.div<Omit<PropsPopUp, 'haveDiscount'>>`
  display: ${(props) => (props.viewPopUp ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 16px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
`
export const PopUpContainer = styled.div`
  display: block;
  z-index: 1;
  max-width: 800px;
  width: 100%;
  max-height: 520px;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid ${variaveis.corFundo};
  background-color: ${variaveis.corPrincipal};
  overflow-y: scroll;
  scrollbar-width: none;
`

export const PopUpImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 320px;

  img {
    width: 880px;
    height: 320px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }
`

export const PopUpDescription = styled.div`
  padding: 24px;
`

export const Icones = styled.div`
  display: flex;
  align-items: center;

  ${BotaoAcao} {
    width: 100%;
    color: ${variaveis.corFundo};
  }
`

export const PopUpsText = styled.div`
  p {
    color: black;
  }
`

export const InfosJogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 1.6em;
`

export const Infos = styled.div`
  display: flex;

  svg {
    color: ${variaveis.corBotao};
  }
  p {
    color: ${variaveis.corFundo};
  }
`

export const TagContainer = styled.div`
  margin-bottom: 1.4em;
`
export const PopUpPrice = styled.div`
  display: flex;
  /* align-items: center; */
  max-width: 200px;

  div {
    margin-right: 16px;
    padding: 4px 12px;
  }

  span {
    margin-bottom: 8px;
  }
`

export const PrecoNovo = styled(PriceNovo)`
  font-size: 20px;
`

export const TagDescont = styled(TagDesconto)`
  padding: 4px 16px;
`

export const ButtonAction = styled(Botao)`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${variaveis.corBotao};

  svg {
    margin-right: 8px;
  }
`

export const AvaliationPopUp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4em;

  svg {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 16px;
    margin-right: 12px;
  }
`

export const FavoritarContainerPopUp = styled(FavoritarContainer)<
  Omit<PropsPopUp, 'viewPopUp'>
>`
  justify-content: ${(props) => (props.haveDiscount > 0 ? '' : 'end')};
`
