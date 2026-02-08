import styled from "styled-components";
import { Avaliatioon, TagDesconto } from "../../../styles";
import variaveis from "../../../styles/variaveis";
import { Button } from "../../Buttons/styles";

type Props = {
  estaNaBiblioteca: boolean;
}

export const CardGame = styled.div<Props>`
  max-width: 308px;
  width: 100%;
  height: ${props => props.estaNaBiblioteca ? '340px' : '286px'};
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
  height:160px;

  img{
    width: 304px;
    height: 160px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

`

export const TagDescontoo =  styled(TagDesconto)`
  padding:4px 8px;
  max-width: 48px;
  `

export const ContainerDescription = styled.div`
  display:block; 
  margin:16px 16px;
  
  h4 {
    color:${ variaveis.corFundo}
  }
`

export const ButtonCart = styled(Button)`
  max-width: 40px;
  padding:4px 0;
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

  p{
    color:${variaveis.corFundo};
  }

  svg {
    color:${variaveis.corFundo};
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

    p{
      color: ${variaveis.corFundo};
    }
  `

  export const avaliationsIcone = styled(Avaliatioon)`
    svg {
      width: 16px;
      height: 16px;
    }
  `