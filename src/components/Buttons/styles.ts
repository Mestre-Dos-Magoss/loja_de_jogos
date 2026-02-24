import styled from "styled-components";
import variaveis from "../../styles/variaveis";
 
export const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  padding:10px 4px;
  border:none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  color:${variaveis.corPrincipal};
  background-color: transparent;
  cursor:pointer;
`