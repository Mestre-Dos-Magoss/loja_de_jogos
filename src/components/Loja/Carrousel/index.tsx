import { useGetGamesQuery } from '../../../services'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Game from '../../../models/jogo'
import { FormatPrice } from '../../../utils/formatPrices'
import { open, viewGame } from '../../../store/reducers/modal'
import { add } from '../../../store/reducers/shoppingCart'

import Icones from '../../../styles/icones'
import Paragrafo from '../../Paragrafo'
import * as S from './styles'
import {
  TagDesconto,
  Categoria,
  Avaliation,
  PriceNovo,
  PriceAntigo,
  Avaliations,
  ContainerPrices
} from '../../../styles/index'

export type Props = {
  Active?: boolean
}

const Carrousel = ({ Active }: Props) => {
  const { data: jogos } = useGetGamesQuery()
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const gameBanner = jogos?.filter((game) => Number(game.id) === Number(count))
  const imageGame = gameBanner?.map((game) => game.image.toString())

  const nextImageGame = () => {
    setCount((prevCount) => (prevCount > 13 ? 1 : prevCount + 1))
  }

  const prevImageGame = () => {
    setCount((prevCount) => (prevCount === -1 ? 13 : prevCount - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      //aqui eu recebo o valor atual de count, e incremento com +1 caso ele seja menor que 12 que é a quantidade de itens do array
      nextImageGame()
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const modalIsOpen = (jogo: Game) => {
    dispatch(open())
    dispatch(viewGame(jogo))
  }

  if (imageGame) {
    return (
      <S.Carrousel style={{ backgroundImage: `url(${imageGame})` }}>
        <S.ArrowsContainer>
          <S.Arrow onClick={() => prevImageGame()}>
            {Icones.setaDireita}
          </S.Arrow>
          <S.Arrow onClick={() => nextImageGame()}>
            {Icones.setaEsquerda}
          </S.Arrow>
        </S.ArrowsContainer>
        {/* <S.ContadoresContainer>
          <S.Contador
            onClick={() => prevImageGame()}
            Active={false}
          ></S.Contador>
          <S.Contador Active={true}></S.Contador>
          <S.Contador
            onClick={() => nextImageGame()}
            Active={false}
          ></S.Contador>
        </S.ContadoresContainer> */}
        <S.CarrouselDescription>
          {gameBanner?.map((game) => (
            <>
              {game.descontPrice > 0 && (
                <TagDesconto>-{game.descontPrice}% OFF</TagDesconto>
              )}
              <S.CarrouselTitle>{game.name}</S.CarrouselTitle>
              <Paragrafo marginBottom={16} fontSize={16} tipo="Principal">
                {game.description}
              </Paragrafo>
              <Avaliations>
                <Avaliation>
                  {Icones.estrela}
                  {game.avaliationGame}
                </Avaliation>
                <Categoria>{game.tag}</Categoria>
              </Avaliations>
              <ContainerPrices>
                {game.descontPrice <= 0 ? (
                  <PriceNovo>{FormatPrice(game.price)}</PriceNovo>
                ) : (
                  <>
                    <PriceAntigo>{FormatPrice(game.price)}</PriceAntigo>
                    <PriceNovo>{FormatPrice(game.newPrice)}</PriceNovo>
                  </>
                )}
              </ContainerPrices>
              <S.ButtonsContainer>
                <S.Button1 onClick={() => modalIsOpen(game)}>
                  Ver detalhes
                </S.Button1>
                <S.Button2 onClick={() => dispatch(add(game))}>
                  Adicionar ao Carrinho
                </S.Button2>
              </S.ButtonsContainer>
            </>
          ))}
        </S.CarrouselDescription>
      </S.Carrousel>
    )
  }
  return <h4>Carregando</h4>
}

export default Carrousel
