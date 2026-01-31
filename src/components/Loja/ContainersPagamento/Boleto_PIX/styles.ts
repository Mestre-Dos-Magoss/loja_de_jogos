import styled from "styled-components";
import { ButtonCarrinho, ContainerPagamentoCinza, MensagemPagamento } from "../../../../styles";
import variaveis from "../../../../styles/variaveis";

export const ContainerPagamentoCodigo = styled(ContainerPagamentoCinza)`
  display: block;
  padding:12px;

  span {
    font-size: 12px;
  }
`

export const MensagemBoleto = styled(MensagemPagamento)`
  display: block;
  text-align: center;
  border-color: #8ec5ff;
  background-color: #dbeafe;
  color:#1447e6;

  strong {
    margin-right: 4px;
  }
`

export const ButtonCopiar = styled(ButtonCarrinho)`
  background-color: ${variaveis.corTextoSecundaria};
  color: ${variaveis.corBotao};
  background-image: none;
  font-weight: bold;
  border-radius: 8px;

  svg {
    margin-bottom: 0;
    width: 16px;
    height: 16px;
  }
`

export const MensagemPix = styled(MensagemPagamento)`
  background-color: transparent;
  border: none;
  color: black;
`