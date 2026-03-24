import { useDispatch } from 'react-redux'
import { add } from '../../../store/reducers/shoppingCart'
import { open, viewGame } from '../../../store/reducers/modal'
import Game from '../../../models/jogo'
import { FormatPrice } from '../../../utils/formatPrices'

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

type Props = Game

type FavoritarGames = {
  id: number
  name: string
  avaliationGame: number
  descontPrice: number
  image: string
  price: number
  newPrice: number
  tag: string
}

const CardJogo = ({
  id,
  name,
  avaliationGame,
  descontPrice,
  image,
  newPrice,
  price,
  tag,
  description,
  developmente,
  realeaseDate
}: Props) => {
  const itsInTheStore = true // somente para os testes
  const dispatch = useDispatch()

  const adicionarGame = () => {
    dispatch(
      add({
        id,
        name,
        image,
        price,
        newPrice,
        avaliationGame,
        descontPrice,
        description,
        developmente,
        realeaseDate,
        tag
      })
    )
  }

  const favoritarGame = ({
    id,
    name,
    avaliationGame,
    descontPrice,
    image,
    price,
    newPrice,
    tag
  }: FavoritarGames) => {
    const key = id
    const GameObject = {
      id,
      name,
      avaliationGame,
      descontPrice,
      image,
      price,
      newPrice,
      tag
    }

    localStorage.setItem(JSON.stringify(key), JSON.stringify(GameObject))
  }

  const eventoClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLElement
    if (target.closest('button')) {
      return
    } else {
      dispatch(
        viewGame({
          id,
          name,
          image,
          price,
          newPrice,
          avaliationGame,
          descontPrice,
          description,
          developmente,
          realeaseDate,
          tag
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
                action={() =>
                  favoritarGame({
                    id,
                    name,
                    avaliationGame,
                    descontPrice,
                    image,
                    price,
                    newPrice,
                    tag
                  })
                }
              >
                {Icones.coracao}
              </BotaoAcao>
              {descontPrice <= 0 ? (
                ''
              ) : (
                <TagDescontoo>{descontPrice + '%'}</TagDescontoo>
              )}
            </FavoritarContainer>
            <img src={image} alt="jogo" />
          </S.CardIMG>
          <S.ContainerDescription>
            <P as="h4" fontSize={14} marginBottom={4}>
              {name}
            </P>
            <Avaliations>
              <Categoriaa>{tag}</Categoriaa>
              <Avaliatioon>
                {Icones.estrela}
                <P fontSize={16}>{avaliationGame}</P>
              </Avaliatioon>
            </Avaliations>
            <ActionContainer>
              <ContainerPrices>
                <PriceAntigoo>{FormatPrice(price)}</PriceAntigoo>
                {descontPrice <= 0 ? (
                  ''
                ) : (
                  <PriceNovo>{FormatPrice(newPrice)}</PriceNovo>
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
            <img src={image} alt="jogo" />
          </S.CardIMG>
          <S.ContainerDescription>
            <P as="h4" fontSize={14} marginBottom={4}>
              {name}
            </P>
            <S.AvaliacoesBiblioteca>
              <S.avaliationsIcone>
                {Icones.estrela}
                <P fontSize={16}>{avaliationGame}</P>
              </S.avaliationsIcone>
              <Categoriaa>{tag}</Categoriaa>
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
