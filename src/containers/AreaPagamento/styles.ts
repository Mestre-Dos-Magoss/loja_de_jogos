import styled from "styled-components";

import { CarrinhoFooter, CarrinhoHeader, Line } from "../../styles";
import variaveis from "../../styles/variaveis";

export type Props = { 
    $pagamento?: boolean;
    $tiposDePagamento?: 'cartao' | 'boleto' | 'pix'
}

export const Pagamento = styled.div`
  border: 1px solid aliceblue;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
`

export const AreaPagamento = styled.div`
  display: grid;
  grid-template-columns: auto 460px;
  width: 100%;
  height: 100vh;
  border: 1px solid aliceblue;
`

export const PagamentoHeader = styled(CarrinhoHeader)`
  height: 68px;
  background-color: ${variaveis.corPrincipal};
`

export const ResumoPedido = styled.div`
  max-width: 380px;
  width: 100%;
  padding: 16px;
  border: 2px solid #cad5e2;
  border-radius: 8px;
  background-color: ${variaveis.cinzaFraco};
  margin-bottom: 1.4em;
`

export const ResumoPedidoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
    margin-bottom: 0.6em;
  }
`

export const DLine = styled(Line)`
  margin-bottom: 0.6em;
`

export const FormasDePagamento = styled.ul`
  display: inline-flex;
  column-gap: 8px;
  margin-bottom: 1.2em;
`

export const InfomaoesPagamento = styled.div`
  display: block;
  width: 100%;
  height: auto;
`

export const PagamentoFooter = styled(CarrinhoFooter)`
  height: 60px;
`

export const ContainerRevisar = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  max-height: 88vh;
  min-height: 88vh;
  overflow-y: scroll;
  scrollbar-width: none;

  img {
    width: 220px;
    height: 220px;
    border-radius: 16px;
  }
`

export const Aviso = styled.div`
  display: block;
  max-width: 912px;
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 24px;
  border-radius: 8px;
  background-color: #21b9a5;
  text-align: center;

  h3 {
    color:gold;
  }
  `