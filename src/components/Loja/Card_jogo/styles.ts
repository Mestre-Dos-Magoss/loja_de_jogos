import styled from "styled-components";
import { Avaliation, Categoria, PriceAntigo, TagDesconto } from "../../../styles";
import variaveis from "../../../styles/variaveis";
import { Button } from "../../Buttons/styles";

export const CardGame = styled.div`
  max-width: 300px;
  width: 140%;
  height: 256px;
  margin-bottom: 4em;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${variaveis.corCard};
    cursor: pointer;
`
export const CardIMG = styled.div`
  position: relative;
  max-width: 350px;
  width: 100%;
  height:128px;

  img{
    width: 100%;
    height: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

`
export const FavoritarContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
  color: white;
  `
export const TagDescontoo =  styled(TagDesconto)`
  padding:4px 8px;
  max-width: 48px;
  `

export const ContainerDescription = styled.div`
  display:block; 
  margin:16px 16px;
  
  h4 {
    color:${ variaveis.corFundo}
  }
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
export const PriceAntigoo = styled(PriceAntigo)`
  font-size: 14px;
  color: ${variaveis.corFundo};
`
export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`

export const ButtonCart = styled(Button)`
  max-width: 40px;
  padding:4px 0;
  border-radius: 8px;
  background-color: ${variaveis.corBotaoEfeito};

  svg {
    color: ${variaveis.corFundo};
    width: 16px;
    height: 16px;
  }
`