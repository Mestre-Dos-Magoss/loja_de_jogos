import styled from "styled-components";
import variaveis from "../../../styles/variaveis";

export type Props = {
  temProdutos: boolean;
}

export const CarrinhoLogo = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${variaveis.corBotao};
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  p{
    text-transform: capitalize;
  }
`

export const CarrinhoSubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 16px;

  p{
    color: ${variaveis.corFundo};
  }
`

export const CarrinhoContainer = styled.div`
  position: fixed;
  right: 0;
  top:0;
  max-width: 460px;
  width: 100%;
  height: 100vh;
  border: 1px solid aliceblue;
`

export const CarrinhoComProduto = styled.div`
  display: flex;
  column-gap: 1em;
  padding: 12px;
  width: 100%;
  height: 106px;
  border: 1px solid ${variaveis.corTextoSecundaria};
  border-radius: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 4px;
  }

  `

export const ExcluirGame = styled.div`
  padding: 4px;
  border-radius: 4px;

  svg {
    width: 16px;
    height: 16px;
    color: ${variaveis.corTag};
  }
`