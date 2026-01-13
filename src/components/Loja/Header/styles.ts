import styled from "styled-components";

import variaveis from "../../../styles/variaveis";
import { Props } from ".";
import { Container } from "../../../styles";

export const Header = styled.div`
  position:sticky;
  left:0;
  top:0;
  z-index:1;
  display: flex;
  justify-content: center;
  height: 64px;
  width:100vw;
  margin-bottom: 5vh;
  border-bottom: 1px solid black;
  background-color: ${variaveis.corPrincipal};
  `
export const FormContainer = styled(Container)`
  margin: 0;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  ` 

export const FormContainerComponents = styled(FormContainer)`
  width: 16vw;
`
export const IsSelected = styled.div<Props>`
  display: flex;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  margin-right: 16px;
  background-color: ${props => props.Active ? variaveis.corBotao : 'transparent'} ;
  transition: 0.2s;
  cursor:pointer;
  
  svg {
    margin-right: 16px;
    width:16px;
    height:16px;
  }

  &:hover{
    background-color: ${props => props.Active ? variaveis.corBotaoEfeito : variaveis.corTextoSecundaria} ;
  }
`
export const Search = styled.input`
  width: 100%;
  padding:8px 16px;
  padding-left:48px;
  border-radius: 8px;
  border:1px solid #c5e4e8ff;
  background-color: #f1f2f6;
`
export const SearchContainer = styled.div`
  position: relative;
  width: 32vw;
  margin-left:64px;

  svg {
    position: absolute;
    left:12px;
    top:8px;
    width:20px;
    height: 20px;
  }
`