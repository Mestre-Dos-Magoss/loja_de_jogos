import { useDispatch } from 'react-redux'
import { add } from '../../../store/reducers/shoppingCart'

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
  Line,
  PriceAntigo,
  TagDesconto
} from '../../../styles/index'
import { DLine } from '../../../containers/AreaPagamento/styles'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'
import Game from '../../../models/jogo'
import { useState } from 'react'
import { FormatPrice } from '../../../utils/formatPrices'

type Props = Game

export type PropsPopUp = {
  viewPopUp: boolean
  haveDiscount: number
}

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

    console.log(
      localStorage.setItem(JSON.stringify(key), JSON.stringify(GameObject))
    )
  }
  const [view, setView] = useState(false)

  const eventoClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLElement
    if (target.closest('button')) {
      return
    }

    setView(true)
  }
  return (
    <>
      {itsInTheStore ? (
        <>
          <S.CardGame
            title="Clique para abrir o PopUp"
            onClick={eventoClick}
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
                  <S.TagDescontoo>{descontPrice + '%'}</S.TagDescontoo>
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
          <S.ContainerPopUp viewPopUp={view}>
            <S.PopUpContainer>
              <S.PopUpImgContainer>
                <S.FavoritarContainerPopUp haveDiscount={descontPrice}>
                  {descontPrice > 0 && (
                    <TagDesconto>- {descontPrice}% off</TagDesconto>
                  )}
                  <S.Icones>
                    <BotaoAcao title="Favoritar Game">
                      {Icones.coracao}
                    </BotaoAcao>
                    <BotaoAcao
                      title="Fechar Janela"
                      action={() => setView(false)}
                    >
                      {Icones.X}
                    </BotaoAcao>
                  </S.Icones>
                </S.FavoritarContainerPopUp>
                <img src={image} alt={name} />
              </S.PopUpImgContainer>
              <S.PopUpDescription>
                <P fontSize={20} marginBottom={16}>
                  {name}
                </P>
                <S.AvaliationPopUp>
                  <Avaliatioon>
                    {Icones.estrela}
                    <span>{avaliationGame}</span>
                  </Avaliatioon>
                  <Categoriaa>{tag}</Categoriaa>
                </S.AvaliationPopUp>
                <S.PopUpsText>
                  <Paragrafo fontSize={20} marginBottom={24}>
                    Sobre o jogo
                  </Paragrafo>
                  <Paragrafo fontSize={16} marginBottom={24}>
                    {description}
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
                        {realeaseDate}
                      </P>
                    </div>
                  </S.Infos>
                  <S.Infos>
                    <div>{Icones.pessoa}</div>
                    <div>
                      <P fontSize={12}>Desenvolvedor</P>
                      <P fontSize={12}>{developmente}</P>
                    </div>
                  </S.Infos>
                </S.InfosJogo>
                <S.TagContainer>
                  <Paragrafo fontSize={16} marginBottom={8}>
                    Tags
                  </Paragrafo>
                  <S.Icones>
                    <Categoriaa>{tag}</Categoriaa>
                    <Categoriaa>Ação</Categoriaa>
                    <Categoriaa>Aventura</Categoriaa>
                  </S.Icones>
                </S.TagContainer>
                <Line />
                <ActionContainer>
                  <div>
                    {descontPrice > 0 && (
                      <S.PopUpPrice>
                        <S.TagDescontoo>-{descontPrice}%</S.TagDescontoo>
                        <PriceAntigo>{FormatPrice(price)}</PriceAntigo>
                      </S.PopUpPrice>
                    )}
                    {descontPrice > 0 ? (
                      <S.PrecoNovo>{FormatPrice(newPrice)}</S.PrecoNovo>
                    ) : (
                      <S.PrecoNovo> {FormatPrice(price)}</S.PrecoNovo>
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
            <S.Overlay />
          </S.ContainerPopUp>
        </>
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
