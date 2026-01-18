import styled from "styled-components";
import variaveis from "../../../styles/variaveis";
import { Button } from '../../Buttons/styles'
import { PriceNovo, TagDesconto } from "../../../styles";

export const PopUpContainer = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 14px;
  left:320px;
  max-width: 800px;
  width: 100%;
  max-height: 520px;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid ${variaveis.corFundo};
  background-color: ${variaveis.corPrincipal};
  overflow-y: scroll;
  scrollbar-width: none;
` 

export const PopUpImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  
  img {
      width: 880px;
      height: 320px;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
  }
`

export const PopUpDescription = styled.div`
  padding: 24px;
`

export const Icones = styled.div`
  display:flex;
  align-items: center;
`

export const PopUpsText = styled.div`
  p{
    color:black;
  }
`

export const InfosJogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 1.6em;
`

export const Infos = styled.div`
  display:flex;

  svg{
    color: ${variaveis.corBotao};
  }
  p {
    color: ${variaveis.corFundo};
  }
`

export const TagContainer = styled.div`
  margin-bottom: 1.4em;
`
export const PopUpPrice = styled.div`
  display: flex;
  /* align-items: center; */
  max-width: 200px;

  div{
    margin-right: 16px;
    padding: 4px 12px;
  }

  span{
    margin-bottom: 8px;
  }
`

export const PrecoNovo = styled(PriceNovo)`
  font-size: 20px;
`

export const TagDescontoo = styled(TagDesconto)`
  padding: 4px 16px;
`

export const ButtonAction = styled(Button)`
  display:flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${variaveis.corBotao};

  svg {
    margin-right: 8px;
  }
`

export const AvaliationPopUp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4em;

  svg {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 16px;
    margin-right:12px;
  }
`