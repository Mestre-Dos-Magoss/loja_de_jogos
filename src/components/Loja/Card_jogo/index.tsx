import { useDispatch } from 'react-redux'

import Game from '../../../models/jogo'

import useFavorites from '../../../hooks/useFavorites'
import Paragrafo from '../../Paragrafo'
import Icones from '../../../styles/icones'
import {
  Avaliations,
  Avaliatioon,
  Categoriaa,
  ContainerPrices,
  BotaoAcao,
  PriceNovo,
  PriceAntigoo,
  ActionContainer,
  FavoritarContainer,
  ButtonJogar,
  TagDescontoo
} from '../../../styles/index'
import { DLine } from '../../../containers/AreaPagamento/styles'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'

import { add } from '../../../store/reducers/shoppingCart'
import { open, viewGame } from '../../../store/reducers/modal'
import { FormatPrice } from '../../../utils/formatPrices'

type Props = {
  game: Game
  itsInTheStore?: boolean
}

const CardJogo = ({ game, itsInTheStore }: Props) => {
  const dispatch = useDispatch()
  const { favoritarGame, getIdFavoriteItem } = useFavorites()

  function adicionarGame() {
    dispatch(add(game))
  }

  function eventoClick(event: React.MouseEvent<HTMLDivElement>): void {
    const target = event.target as HTMLElement
    if (target.closest('button')) {
      return
    } else {
      dispatch(
        viewGame({
          id: game.id,
          name: game.name,
          image: game.image,
          price: game.price,
          newPrice: game.newPrice,
          avaliationGame: game.avaliationGame,
          descontPrice: game.descontPrice,
          description: game.description,
          developmente: game.developmente,
          realeaseDate: game.realeaseDate,
          tag: game.tag
        })
      )
      dispatch(open())
    }
  }

  return (
    <>
      {itsInTheStore ? (
        <S.CardGame
          title="Clique para abrir o PopUp"
          onClick={(e) => eventoClick(e)}
          itsInTheStore={false}
        >
          <S.CardIMG>
            <FavoritarContainer>
              <BotaoAcao
                title="Favoritar game"
                action={() => favoritarGame(game)}
              >
                {getIdFavoriteItem(game.id)
                  ? Icones.coracaoVermelho
                  : Icones.coracao}
              </BotaoAcao>
              {game.descontPrice <= 0 ? (
                ''
              ) : (
                <TagDescontoo>{game.descontPrice + '%'}</TagDescontoo>
              )}
            </FavoritarContainer>
            <img src={game.image} alt="jogo" />
          </S.CardIMG>
          <S.ContainerDescription>
            <P as="h4" fontSize={14} marginBottom={4}>
              {game.name}
            </P>
            <Avaliations>
              <Categoriaa>{game.tag}</Categoriaa>
              <Avaliatioon>
                {Icones.estrela}
                <P fontSize={16}>{game.avaliationGame}</P>
              </Avaliatioon>
            </Avaliations>
            <ActionContainer>
              <ContainerPrices>
                <PriceAntigoo>{FormatPrice(game.price)}</PriceAntigoo>
                {game.descontPrice <= 0 ? (
                  ''
                ) : (
                  <PriceNovo>{FormatPrice(game.newPrice)}</PriceNovo>
                )}
              </ContainerPrices>
              <S.ButtonCart
                title="Adicionar ao carrinho"
                action={adicionarGame}
              >
                {Icones.carrinho}
              </S.ButtonCart>
            </ActionContainer>
          </S.ContainerDescription>
        </S.CardGame>
      ) : (
        <S.CardGame itsInTheStore={true}>
          <S.CardIMG>
            <img src={game.image} alt="jogo" />
          </S.CardIMG>
          <S.ContainerDescription>
            <P as="h4" fontSize={14} marginBottom={4}>
              {game.name}
            </P>
            <S.AvaliacoesBiblioteca>
              <S.avaliationsIcone>
                {Icones.estrela}
                <P fontSize={16}>{game.avaliationGame}</P>
              </S.avaliationsIcone>
              <Categoriaa>{game.tag}</Categoriaa>
            </S.AvaliacoesBiblioteca>
            <ActionContainer>
              <ContainerPrices>
                <S.HorasJogadas>
                  <div>{Icones.relogio}</div>
                  <Paragrafo fontSize={12} marginBottom={4} tipo="Secundario">
                    15h Jogadas
                  </Paragrafo>
                </S.HorasJogadas>
              </ContainerPrices>
            </ActionContainer>
            <DLine />
            <S.Jogar>
              <ButtonJogar title="Iniciar Game">
                {Icones.pause}
                jogar agora
              </ButtonJogar>
            </S.Jogar>
          </S.ContainerDescription>
        </S.CardGame>
      )}
    </>
  )
}

export default CardJogo
