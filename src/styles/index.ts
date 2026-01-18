import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  padding: 0%;
  margin:0;
  box-sizing: border-box;
  font-family: sans-serif;
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

  /* &:hover {
    background-color: ${props =>  variaveis.corTextoSecundaria};
    transition: 0.2s;
  } */
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
  background-color:red;
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