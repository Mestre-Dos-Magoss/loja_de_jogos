import styled from "styled-components";
import { Container } from '../../../styles/index'
import variaveis from "../../../styles/variaveis";

export const Secao = styled.div`
  display: flex;
  align-items:center;
  margin-bottom: 1em;
  p{
    color:${variaveis.corFundo};
    margin-left:8px;
  }
`
export const iconeLaranja = styled.svg`
  color: orange;
`
export const iconeAzul = styled.svg`
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