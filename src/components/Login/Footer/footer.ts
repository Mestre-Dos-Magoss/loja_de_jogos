import styled from "styled-components";
import variaveis from "../../../styles/variaveis";

import { P } from "../../Paragrafo/Paragrafo";

export const ParagrafoFooter = styled(P)`
 text-transform: uppercase;
 text-decoration:underline;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
 
export const Redes = styled.div`
  display: flex;
  justify-content: center;
  color: ${variaveis.corPrincipal};
  margin-bottom: 16px;
`

export const Button = styled.button`
  width: calc(100% -10px);
  background-color: transparent;
  color: ${variaveis.corPrincipal};
  border: 1px solid #222f37ff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 48px;
  margin-right: 12px;
  cursor:pointer;
`

export const ContainerText = styled.div`
  display:flex;
  justify-content:center;
`
export const Link = styled.a`
  margin-left:4px;
  font-weight: bold;
  font-size: 16px;
  color:${variaveis.corLink}
`