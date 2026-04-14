import styled from 'styled-components'

import variaveis from '../../../styles/variaveis'
import { Container } from '../../../styles'
import { Link } from 'react-router-dom'

type PropsPopUp = {
  isActive?: boolean
}

export const Header = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 64px;
  width: 100%;
  margin-bottom: 5vh;
  border-bottom: 1px solid black;
  background-color: ${variaveis.corPrincipal};
`
export const FormContainer = styled(Container)`
  margin: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const FormContainerComponents = styled(FormContainer)`
  width: 16vw;
  position: relative;
  justify-content: space-evenly;
`
export const IsSelectedLink = styled(Link)<PropsPopUp>`
  display: flex;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  margin-right: 16px;
  background-color: ${(props) =>
    props.isActive ? variaveis.corBotao : 'transparent'};
  color: ${variaveis.corFundo};
  transition: 0.2s;
  cursor: pointer;

  svg {
    margin-right: 16px;
    width: 16px;
    height: 16px;
  }
`
export const IsSelected = styled.div<PropsPopUp>`
  display: flex;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  margin-right: 16px;
  background-color: ${(props) =>
    props.isActive ? variaveis.corBotao : 'transparent'};
  color: ${variaveis.corFundo};
  transition: 0.2s;
  cursor: pointer;

  svg {
    margin-right: 16px;
    width: 16px;
    height: 16px;
  }
`

export const Search = styled.input`
  width: 100%;
  padding: 8px 16px;
  padding-left: 48px;
  border-radius: 8px;
  border: 1px solid #c5e4e8ff;
  background-color: #f1f2f6;
`
export const SearchContainer = styled.div`
  position: relative;
  width: 32vw;
  margin-left: 64px;

  svg {
    position: absolute;
    left: 12px;
    top: 8px;
    width: 20px;
    height: 20px;
  }
`

export const PopUpSair = styled(Link)<PropsPopUp>`
  position: absolute;
  top: 72px;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  align-items: center;
  max-width: 192px;
  width: 100%;
  height: 56px;
  padding: 8px;
  padding-left: 16px;
  background-color: ${variaveis.corPrincipal};
  color: black;
  border: 1px solid ${variaveis.cinzaFraco};
  border-radius: 16px;
  text-transform: capitalize;
`
export const ItensCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0px;
  width: 24px;
  padding: 2px;
  font-size: 16px;
  border-radius: 50%;
  right: 0px;
  background-color: ${variaveis.corBotao};
  color: ${variaveis.corPrincipal};
`

export const ItensFavorites = styled(ItensCart)`
  right: 42px;
  background-color: ${variaveis.corTag};
`

export const LinksContainer = styled.div<PropsPopUp>`
  display: flex;
  position: ${(props) => (props.isActive ? '' : 'absolute')};
  left: 500px;
`
