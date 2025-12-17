import styled from "styled-components";

import variaveis from "../../../styles/variaveis";
import { ImgContainer } from '../../Login/Header/header'
import { Props } from ".";
import { Container } from "../../../styles";

export const Header = styled.div`
  position:sticky;
  left:0;
  top:0;
  padding-top: 12px; 
  height: 64px;
  width:100vw;
  margin-bottom: 5vh;
  border-bottom: 1px solid black;
  background-color: ${variaveis.corPrincipal};
  `
export const FormContainer = styled(Container)`
  display:flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  ` 
export const LogoContainer = styled.div`
  display: flex;
  align-items:center;
  font-size: 16px;
  margin-right: 32px;
  `
export const ContainerImg = styled(ImgContainer)`
  max-width: 60px;
  padding:6px 6px;
  border-radius:6px;
  margin-right:8px;
  margin-bottom: 0;
  
      svg{
      width:22px;
      height: 22px;
  }
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
  background-color: ${props => props.Active ? 'rgba(161, 68, 255, 1)' : 'transparent'} ;
  transition: 0.2s;
  cursor:pointer;
  
  svg {
    margin-right: 16px;
    width:16px;
    height:16px;
  }

  &:hover{
    background-color: ${props => props.Active ? '#a70de9ff' : variaveis.corTextoSecundaria} ;
  }
`
export const Search = styled.input`
  width: 100%;
  padding:8px 16px;
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
export const IconsContainer = styled.div<Props>`
  background-color: transparent;
  transition: 0.2s;
  padding: 8px 10px;
  border-radius: 6px;

  &:hover {
    background-color: ${props =>  variaveis.corTextoSecundaria};
    transition: 0.2s;
  }
`
