import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Button } from '../components/Buttons/styles'
import { Props } from '../components/Loja/Carrinho/styles'

const EstiloGlobal = createGlobalStyle`
* {
  padding: 0%;
  margin:0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  list-style: none;
}

/* Fundo login */
/* body {
  position:relative;
  width:100%;
  min-height: 100vh;
  background-image:url('https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80');
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 24px;
  
  }
  body::before {
    content:"";
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    min-height:100vh;
    opacity:0.90;
    z-index: -1;
    background-image: radial-gradient(100% 94%, black, #1d0050);
   } */
    `
export default EstiloGlobal

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display:flex; 
  justify-content: center; 
  margin: 0 auto;
`
export const ImgContainer = styled.div`
  display:flex;
  justify-content: center; 
  align-items: center;
  max-width: 68px;
  width:100%;
  padding:16px 0;
  border-radius:16px;
  margin-bottom:24px;
  background-image: linear-gradient(322deg,  ${variaveis.corDegrade1} ,${variaveis.corDegrade2});

  svg{
      color:white;
      width:36px;
      height: 36px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items:center;
  font-size: 16px;
  margin-right: 32px;
  `

export const ContainerImg = styled(ImgContainer)`
  max-width: 36px;
  padding:6px 6px;
  border-radius:6px;
  margin-right:8px;
  margin-bottom: 0;
  
      svg{
      width:22px;
      height: 22px;
  }
`

export const IconsContainer = styled.div`
  display:flex;
  background-color: transparent;
  transition: 0.2s;
  padding: 8px 10px;
  border-radius: 6px;

  &:hover {
    background-color: ${variaveis.corTextoSecundaria};
    transition: 0.2s;
  }
`
export const TagDesconto = styled.div`
  display:flex;
  justify-content: center;
  max-width: 72px;
  width: 100%; 
  padding:6px 0;
  font-size: 12px;
  margin-bottom:1em;
  border-radius: 8px;
  background-color:${variaveis.corTag};
  color:black;
`

export const Categoria = styled(TagDesconto)`
  padding: 4px 32px;
  background-color: transparent;
  color:${variaveis.corPrincipal};
  border: 1px solid #c5e4e8ff;
`

export const Avaliation = styled.div`
  color:${variaveis.corPrincipal};
  svg{
    color:orange;
    margin-right: 4px;
    width:20px;
    height: 20px;
  }
`

export const PriceNovo = styled.span`
  color:#03c903;
`

export const PriceAntigo = styled(PriceNovo)`
  color: ${variaveis.corTextoSecundaria};
  text-decoration:line-through;
  margin-right:10px;
`

export const Avaliations = styled.div`
  display:flex;
  width:25%;
  margin-bottom: 1em;
  justify-content: space-evenly;
`

export const ContainerPrices = styled.div`
  display:flex;
  width:25%;
  margin-bottom: 1em;
  color:${variaveis.corPrincipal};
`

export const Avaliatioon = styled(Avaliation)`
  display:flex;
  align-items: center;
  font-size:12px;
  margin-left:8px;
  color:black;

  svg {
    width: 12px;
    height: 12px;
  }
`

export const Categoriaa = styled(Categoria)`
  color: ${variaveis.corFundo};
  border: 1px solid ${variaveis.corTextoSecundaria};
  margin-bottom: 0;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e4e7e8;
  margin-bottom: 2em;
  `

  export const PriceAntigoo = styled(PriceAntigo)`
  font-size: 14px;
  color: ${variaveis.corFundo};
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

export const InfosGame = styled.div`
  display: block;
  width: 100%;
  text-align: start;
  
  h6, p {
    color: ${variaveis.corFundo};
    margin-bottom: 0.6em;
   }
  `

  export const CampoContainer = styled.div`
  width: 100%;
  display: block;
  font-size: 14px;
  font-weight: bold;
  text-align: start;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 16px;
`

export const Campo = styled.input`
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: 2px solid #cad5e2;
  border-radius: 8px;
  margin-top: 4px; 
  background-color: ${variaveis.cinzaFraco};
`

export const ContainerPagamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px;
  background-color: ${variaveis.cinzaFraco};
  border-radius: 12px;
  border: 1px solid #cad5e2;
  margin-bottom: 16px;
`

export const PagamentoHeaderItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: capitalize;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    margin-bottom: 0;
    color: ${variaveis.corBotaoEfeito};
  }
`

export const PagamentoHeaderItemVariante = styled(PagamentoHeaderItem)`
  font-weight: 400px;
  margin-bottom: 16px;
`

export const ContainerPagamentoCinza = styled(ContainerPagamento)`
  background-color:#e2e8f0;
  border: 1px solid ${variaveis.cinzaFraco};

  svg {
    width: 164px;
    height: 164px;
    padding: 12px;
    border-radius: 12px;
    background-color: #cad5e2;
  }
`

export const MensagemPagamento = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 1em;
  border: 1px solid ${variaveis.corBotaoEfeito};
  border-radius:12px;
  background-color: rgba(173,70,255,0.1);
  color:${variaveis.corBotaoEfeito};

  svg {
    width: 24px;
    height: 24px;
    color: ${variaveis.corBotao};
    margin-right: 4px;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`

export const FavoritarContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
  color: white;
  `