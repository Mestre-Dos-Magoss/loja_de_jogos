import styled from 'styled-components'
import { Props as View } from './index'
import variaveis from '../../../styles/variaveis'

export type Props = {
  temProdutos: boolean
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

  p {
    text-transform: capitalize;
  }
`

export const CarrinhoSubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  margin-bottom: 16px;

  p {
    color: ${variaveis.corFundo};
  }
`

export const CarrinhoContainer = styled.div<View>`
  display: ${(props) => (props.viewShopping ? 'block' : 'none')};
  z-index: 2;
  position: fixed;
  right: 0;
  top: 0;
  max-width: 460px;
  width: 100%;
  height: 100vh;
  border: 1px solid aliceblue;
  background-color: ${variaveis.corPrincipal};
`
