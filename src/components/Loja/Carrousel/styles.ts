import styled from "styled-components";

import { Container, ContainerPrices } from "../../../styles";
import variaveis from "../../../styles/variaveis";
import { Button } from "../../Buttons/styles";
import { Props } from "../Header";

export const Carrousel = styled(Container)`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-bottom:3em;
  /* overflow: hidden; */
  `
export const CarrouselImg = styled.img`
  width: 100%; 
  height:512px;
  border-radius: 16px;
  /* transform: scale(1.2); */
  /* Testar mais tarde os efeitos */
`
export const CarrouselDescription = styled.div`
  width: 600px;
  position: absolute;
  top:100px;
  margin-left: 16px; 
`

export const CarrouselTitle = styled.h3`
  font-size: 1.6em;
  margin-bottom:1em;
  color:${variaveis.corPrincipal};
`

export const ButtonsContainer = styled(ContainerPrices)`
  width:400px;
`

export const Button1 = styled(Button)`
  width:30%;
  margin-right: 12px;
  font-weight:normal;
  background-color: ${variaveis.corBotao};
  color:${variaveis.corFundo};
  transition: 0.2s;

    &:hover {
      background-color: ${variaveis.corBotaoEfeito};
      transition: 0.2s;
      font-weight: 400px;
  }
`
export const Button2 = styled(Button)`
  width: 50%;
  padding: 12px 0;
  font-weight:normal;
  background-color: ${variaveis.corFundo};
  opacity: 0.3;
  transition: 0.2s;

    &:hover {
      opacity: 0.8;
      transition: 0.2s;
      font-weight: 400px;
  }
`

export const ArrowsContainer = styled.div`
  position: absolute;
  top:50%;
  display: flex;
  justify-content: space-between;
  width:100%;
`
export const Arrow = styled.span`
  padding:12px 16px;
  border-radius: 50%;
  border:none;
  color:${variaveis.corPrincipal};
  background-color: ${variaveis.corFundo};
  opacity: 0.6;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`

export const ContadoresContainer = styled.div`
  position: absolute;
  width:10%;
  height:4%;
  top:94%;
  left:46%; 
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Contador = styled.div<Props>`
  width: ${props => props.Active ? '32%' : '16%'};
  height: 24%;
  border-radius: 8px; 
  background-color: ${props => props.Active ? variaveis.corBotao : variaveis.corTextoSecundaria};
  cursor:pointer;
`