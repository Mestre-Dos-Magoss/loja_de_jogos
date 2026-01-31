import styled from "styled-components";
import { CarrinhoComProduto, ExcluirGame } from "../Carrinho/styles";

export const Produto = styled(CarrinhoComProduto)`
  margin-top: 40px;
  height: auto;
  padding: 16px;
`

  export const description = styled.div`
    width: 100%;
    height:78px;
    overflow:hidden;
  `

export const ExcluirProduto = styled(ExcluirGame)`
  svg {
    width: 24px;
    height: 24px;
  } 
`

export const Price = styled.div`

  span {
    font-size: 24px;
  }
`
