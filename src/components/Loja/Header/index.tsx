import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { useContext, useState } from 'react'

import { CartContext } from '../../../utils/contexts/carrinho'
import { alteraTermo } from '../../../store/reducers/filtro'

import Icones from '../../../styles/icones'
import { ContainerImg, BotaoAcao, LogoContainer } from '../../../styles/index'
import * as S from './styles'

const HeaderLoja = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //apenas para testar o comportamento
  const [isActive, setIsActive] = useState('store')

  const { toggleState } = useContext(CartContext)
  const itensCart = useSelector((state: RootState) => state.shoppingCart.itens)
  const gamefavoritado = useSelector((state: RootState) => state.favorito.item)
  const dispatch = useDispatch()

  return (
    <>
      {isActive === 'store' ? (
        <S.Header>
          <S.FormContainer>
            <S.FormContainerComponents>
              <LogoContainer>
                <ContainerImg>{Icones.controle}</ContainerImg>
                <p>GamesStore</p>
              </LogoContainer>
              <S.IsSelectedLink
                to={'/'}
                onClick={() => setIsActive('store')}
                isActive
              >
                {Icones.loja}
                Loja
              </S.IsSelectedLink>
              <S.IsSelectedLink
                to={'/library'}
                onClick={() => setIsActive('library')}
              >
                {Icones.biblioteca}
                Biblioteca
              </S.IsSelectedLink>
            </S.FormContainerComponents>
            <S.SearchContainer>
              {Icones.lupa}
              <S.Search
                type="search"
                placeholder="Buscar jogos..."
                onChange={(event) => dispatch(alteraTermo(event.target.value))}
              />
            </S.SearchContainer>
            <S.FormContainerComponents>
              <BotaoAcao title="Trocar tema">{Icones.sol}</BotaoAcao>
              <S.IsSelected onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {Icones.pessoa}
                User
                <S.PopUpSair to={'/login'} isActive={isLoggedIn}>
                  <div>{Icones.sair}</div>
                  sair
                </S.PopUpSair>
              </S.IsSelected>
              <BotaoAcao title="Favoritos">
                <a href="#favoritos">{Icones.coracao}</a>
              </BotaoAcao>
              {gamefavoritado.length > 0 && (
                <S.ItensFavorites>{gamefavoritado.length}</S.ItensFavorites>
              )}
              {itensCart.length > 0 && (
                <S.ItensCart>{itensCart.length}</S.ItensCart>
              )}
              <BotaoAcao title="Ir ao carrinho" action={() => toggleState()}>
                {Icones.carrinho}
              </BotaoAcao>
            </S.FormContainerComponents>
          </S.FormContainer>
        </S.Header>
      ) : (
        <S.Header>
          <S.FormContainer>
            <S.FormContainerComponents>
              <LogoContainer>
                <ContainerImg>{Icones.controle}</ContainerImg>
                <p>GamesStore</p>
              </LogoContainer>
              <S.LinksContainer>
                <S.IsSelectedLink to={'/'} onClick={() => setIsActive('store')}>
                  {Icones.loja}
                  Loja
                </S.IsSelectedLink>
                <S.IsSelectedLink
                  to={'/library'}
                  onClick={() => setIsActive('library')}
                  isActive
                >
                  {Icones.biblioteca}
                  Biblioteca
                </S.IsSelectedLink>
              </S.LinksContainer>
            </S.FormContainerComponents>
            <S.FormContainerComponents>
              <BotaoAcao title="Trocar tema">{Icones.sol}</BotaoAcao>
              <S.IsSelected onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {Icones.pessoa}
                User
                <S.PopUpSair to={'/login'} isActive={isLoggedIn}>
                  <div>{Icones.sair}</div>
                  sair
                </S.PopUpSair>
              </S.IsSelected>
            </S.FormContainerComponents>
          </S.FormContainer>
        </S.Header>
      )}
    </>
  )
}

export default HeaderLoja
