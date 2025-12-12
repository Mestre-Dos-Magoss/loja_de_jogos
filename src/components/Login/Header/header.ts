import styled from "styled-components";
import variaveis from "../../../styles/variaveis"; 

export const Header = styled.header`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height:160px;
  margin-bottom:20px;
`

export const ImgContainer = styled.div`
  display:flex;
  justify-content: center; 
  align-items: center;
  max-width: 68px;
  width:100%;
  padding:16px 0;
  border-radius:16px;
  margin-bottom:24px;
  background-image: linear-gradient(322deg,  ${variaveis.corDegrade1} ,${variaveis.corDegrade2});

  svg{
      color:white;
      width:36px;
      height: 36px;
  }
`