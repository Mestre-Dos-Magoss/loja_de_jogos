import styled from "styled-components";
import variaveis from "../../../styles/variaveis";
import Button from "../../Buttons";

type Size ={
  size: 'small' | 'big'
}

export const Produto = styled.div<Size>`
  display: flex;
  margin-top: ${props => props.size === 'big' ? '40px' : '0'};
  column-gap: 1em;
  width: 100%;
  height: ${props => props.size === 'big' ? 'auto' : '106px'};
  padding:${props => props.size === 'big' ? '16px' : '12px'} 16px;
  border: 1px solid ${variaveis.corTextoSecundaria};
  border-radius: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 4px;
  }

  h5{
    font-size: ${props => props.size === 'big' ? '32px' : '16'};
  }

  p{
    font-size: ${props => props.size === 'big' ? '18px' : '12'};
  }
`

  export const description = styled.div<Size>`
    display:${props => props.size === 'big' ? 'block' : 'none'};
    width: 100%;
    height:78px;
    overflow:hidden;
  `

export const ExcluirProduto = styled(Button)<Size>`
  padding: 4px;
  border-radius: 4px;
  width: 10%;
  align-items: start;

  svg {
    width: ${props => props.size === 'big' ? '24px' : '16px'};
    height: ${props => props.size === 'big' ? '24px' : '16px'};
    color: ${variaveis.corTag};
  } 

`

export const Price = styled.div<Size>`
  span {
    font-size: ${props => props.size === 'big' ? '24px' : 'normal'} ;
  }
`
