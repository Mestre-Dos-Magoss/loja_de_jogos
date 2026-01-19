import styled from "styled-components";
import variaveis from "../../../styles/variaveis";
import { Button } from "../../Buttons/styles";


type Props = {
  temProdutos: boolean;
}

export const CarrinhoContainer = styled.div`
  position: fixed;
  right: 0;
  top:0;
  max-width: 420px;
  width: 100%;
  height: 100vh;
  border: 1px solid aliceblue;
`

export const CarrinhoHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 0.8px solid ${variaveis.corFundo};

  p {
    color: ${variaveis.corFundo};
  }
`

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

export const CarrinhoProdutos = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.temProdutos ? 'start' : 'center'};
  max-width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  padding: 16px;
  text-align: center;
  overflow-y: scroll;
  scrollbar-width: none;

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 1em;
  }

  p {
    margin-bottom: 0.6em;
  }
`

export const CarrinhoFooter = styled.div<Props>`
  display: ${props => props.temProdutos ? 'block' : 'none'};
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 112px;
  border-top: 0.8px solid ${variaveis.corFundo};
  padding: 16px;
  background-color: ${variaveis.corPrincipal};
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

export const ButtonCarrinho = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: normal;
  text-transform: capitalize;
    background-image:linear-gradient(266deg, ${variaveis.corDegrade1},${variaveis.corDegrade2});
  color: ${variaveis.corFundo};

    svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

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

export const InfosGame = styled.div`
  display: block;
  width: 100%;
  text-align: start;
  
  h6, p {
    color: ${variaveis.corFundo};
    margin-bottom: 0.6em;
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