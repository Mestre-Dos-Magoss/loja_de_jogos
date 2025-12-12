import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Props } from './index';

export const P = styled.p<Props>`
  color: ${props => props.tipo === 'Principal' ? `${variaveis.corPrincipal}` : `${variaveis.corTextoSecundaria}`};
  font-size: ${props => props.fontSize+'px' || '16px'};
  margin-bottom: ${props => props.marginBottom+'px' || '16px'};
`     