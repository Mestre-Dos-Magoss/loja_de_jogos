import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../store'

import Icones from '../../../styles/icones'
import * as S from './styles'
import {
  ActionContainer,
  Avaliatioon,
  BotaoAcao,
  Categoriaa,
  Line,
  PriceAntigo,
  TagDesconto,
  TagDescontoo
} from '../../../styles'
import Paragrafo from '../../Paragrafo'
import { P } from '../../Paragrafo/Paragrafo'
import useFavorites from '../../../hooks/useFavorites'

import { addGames } from '../../../store/reducers/library'
import { FormatPrice } from '../../../utils/formatPrices'
import { close, open } from '../../../store/reducers/modal'

export type ModalProps = {
  viewPopUp: boolean
  haveDiscount: number
}

const Modal = () => {
  const { favoritarGame, getIdFavoriteItem } = useFavorites()
  const dispatch = useDispatch()
  const { isOpen, game } = useSelector((state: RootState) => state.modal)

  if (!game || !isOpen) return null
  const openModal = () => {
    dispatch(open())
  }
  const adicionarGame = () => {
    dispatch(addGames(game))
  }

  const closeModal = () => {
    dispatch(close())
  }

  return (
    <S.ContainerPopUp className={isOpen ? 'open' : ''}>
      <S.PopUpContainer>
        <S.PopUpImgContainer>
          <S.FavoritarContainerPopUp haveDiscount={game.descontPrice}>
            {game.descontPrice > 0 && (
              <TagDesconto>- {game.descontPrice}% off</TagDesconto>
            )}
            <S.Icones>
              <BotaoAcao
                title="Favoritar Game"
                action={() => favoritarGame(game)}
              >
                {getIdFavoriteItem(game.id)
                  ? Icones.coracaoVermelho
                  : Icones.coracao}
              </BotaoAcao>
              <BotaoAcao title="Fechar Janela" action={closeModal}>
                {Icones.X}
              </BotaoAcao>
            </S.Icones>
          </S.FavoritarContainerPopUp>
          <img src={game.image} alt={game.name} />
        </S.PopUpImgContainer>
        <S.PopUpDescription>
          <P fontSize={20} marginBottom={16}>
            {game.name}
          </P>
          <S.AvaliationPopUp>
            <Avaliatioon>
              {Icones.estrela}
              <span>{game.avaliationGame}</span>
            </Avaliatioon>
            <Categoriaa>{game.tag}</Categoriaa>
          </S.AvaliationPopUp>
          <S.PopUpsText>
            <Paragrafo fontSize={20} marginBottom={24}>
              Sobre o game
            </Paragrafo>
            <Paragrafo fontSize={16} marginBottom={24}>
              {game.description}
            </Paragrafo>
          </S.PopUpsText>
          <S.InfosJogo>
            <S.Infos>
              <div>{Icones.calendario}</div>
              <div>
                <P as="p" fontSize={12}>
                  Data de Lançamento
                </P>
                <P as="p" fontSize={16}>
                  {game.realeaseDate}
                </P>
              </div>
            </S.Infos>
            <S.Infos>
              <div>{Icones.pessoa}</div>
              <div>
                <P fontSize={12}>Desenvolvedor</P>
                <P fontSize={12}>{game.developmente}</P>
              </div>
            </S.Infos>
          </S.InfosJogo>
          <S.TagContainer>
            <Paragrafo fontSize={16} marginBottom={8}>
              Tags
            </Paragrafo>
            <S.Icones>
              <Categoriaa>{game.tag}</Categoriaa>
              <Categoriaa>Ação</Categoriaa>
              <Categoriaa>Aventura</Categoriaa>
            </S.Icones>
          </S.TagContainer>
          <Line />
          <ActionContainer>
            <div>
              {game.descontPrice > 0 && (
                <S.PopUpPrice>
                  <TagDescontoo>-{game.descontPrice}%</TagDescontoo>
                  <PriceAntigo>{FormatPrice(game.price)}</PriceAntigo>
                </S.PopUpPrice>
              )}
              {game.descontPrice > 0 ? (
                <S.PrecoNovo>{FormatPrice(game.newPrice)}</S.PrecoNovo>
              ) : (
                <S.PrecoNovo> {FormatPrice(game.price)}</S.PrecoNovo>
              )}
            </div>
            <div>
              <S.ButtonAction onClick={() => adicionarGame}>
                {Icones.carrinho}
                adicionar ao carrinho
              </S.ButtonAction>
            </div>
          </ActionContainer>
        </S.PopUpDescription>
      </S.PopUpContainer>
      <S.Overlay onClick={closeModal} />
    </S.ContainerPopUp>
  )
}

export default Modal
