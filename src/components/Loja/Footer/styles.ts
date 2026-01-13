import styled from "styled-components";
import { Container, LogoContainer } from "../../../styles";
import variaveis from "../../../styles/variaveis";

export const Teste = styled.div`
  border-top: 2px solid #e8e4e4;
  background-color: aliceblue;
`

export const ContainerFooter = styled(Container)`
  display: block;
`
export const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  margin: 48px 16px 48px 16px;

`

export const LogoContainerFooter = styled(LogoContainer)`
  height:39px;
  margin-bottom: 16px;
  margin-right: 0;

  p{
    color: ${variaveis.corFundo}
  }
`

export const ContainerRedes = styled.div`
  display: inline-flex;
  gap: 12px;
  `
export const RedesSocial = styled.div`
  padding: 4px 6px;
  border-radius: 12px;
  background-color: #dbe5e4;

  svg {
    width: 26px;
    height: 26px;
  }
`

export const LinksUteis = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;

  p{
    color: ${variaveis.corFundo};
  }

  li,a{
    color: ${variaveis.corTextoSecundaria};
    font-size: 14px;
    margin-bottom: 1em;
  }
`
export const Contato = styled.div`
  margin-left: 100px;

  p{
    display: block;
  }
  
  a{
      color:${variaveis.corFundo};
  }
   svg{
        color: ${variaveis.corBotao};
   }
`

export const ContatoItens = styled.div`
  display: inline-flex;
  margin-bottom: 1.4em;

  svg {
    margin-right: 12px;
  }
`
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e4e7e8;
  margin-bottom: 2em;
  `
export const TermosContainer = styled.div`
  display:flex;
  justify-content: space-between;
  padding-bottom: 3em;

  p{
    color: ${variaveis.corFundo}
  }

  ul {
    max-width: 360px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    li a{
        color: ${variaveis.corFundo};
        text-transform: capitalize;
    }
  }
`