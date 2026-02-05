import styled from "styled-components"
import { Props } from '../../../containers/AreaPagamento/styles'

import variaveis from "../../../styles/variaveis"

export const OpcaoDePagamanto = styled.li<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 118px;
  width: 100%;
  height: 84px;
  padding: 16px;
  border: 2px solid ${props => props.$pagamento ? 'rgba(173,70,255)' : variaveis.corTextoSecundaria};
  border-radius: 8px;
  background-color: ${props => props.$pagamento ? 'rgba(173,70,255,0.1)' : '#fff'};
  cursor: pointer;

  svg{ 
    width: 30px;
    height: 30px;
    margin: 0 30px 4px;
    color: ${ props => props.$pagamento ? variaveis.corBotaoEfeito : variaveis.corFundo}
    }

  span {
    font-size: 12px;
    text-transform: capitalize;
    color: ${props => props.$pagamento ? variaveis.corBotaoEfeito : variaveis.corFundo}
  }
`