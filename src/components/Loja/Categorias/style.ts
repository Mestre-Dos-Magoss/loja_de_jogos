import styled from "styled-components";

import { Button } from "../../Buttons/styles";
import { Props } from '../Header/index'

import variaveis from "../../../styles/variaveis";
import { Container } from "../../../styles";

export const CategoriaContainer = styled(Container)`
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  margin-bottom: 4em;
`
export const CategoriaTitle = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 1.2em;

  svg{
    color:${variaveis.corBotao};
    margin-right:8px;
  }
`

export const Categoria = styled.div`
  display:flex;
  width:640px;
`

export const ButtonsCategoria = styled(Button)<Props>`
  background-color: ${props => props.Active ? variaveis.corBotaoEfeito : variaveis.corTextoSecundaria};
  color:${variaveis.corFundo};
  border-radius:8px;
  margin-right:12px;
  font-weight: ${props => props.Active ? 'bold' : 'normal'};
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.Active ? variaveis.corBotao : '#828080ff'};
    transition: 0.1s;
  }
`