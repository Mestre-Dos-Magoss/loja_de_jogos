import styled from "styled-components";
import { Container } from '../../../styles/index'
import variaveis from "../../../styles/variaveis";

export const Secao = styled.div`
  display: flex;
  align-items:center;
  margin-bottom: 1em;

  svg {
  }
  p{
    color:${variaveis.corFundo};
    margin-left:8px;
  }
  `
export const IconeLaranja = styled.svg`
  width: 24px;
  height:30px;
  color: orange;
`
export const IconeAzul = styled(IconeLaranja)`
  color: blue;
`

export const ListContainer = styled.ul`
  display:flex;
  gap: 1em;
  flex-wrap: wrap;
`

export const ContainerCards = styled(Container)`
  display:block;
  margin: 0 auto;
`

export const TextCharging = styled.h1`
  display: block;
  margin-bottom: 1em;
  background-image: linear-gradient(220deg, ${variaveis.corAzul}, ${variaveis.corBotao});
  background-clip:text;
  color:transparent;
`