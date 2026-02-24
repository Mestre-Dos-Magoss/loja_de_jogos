import { useDispatch } from 'react-redux'
import { add } from '../../../store/reducers/shoppingCart'

import Paragrafo from '../../Paragrafo'
import Icones from '../../../styles/icones'
import { Avaliations, Avaliatioon, Categoriaa, ContainerPrices, BotaoAcao, PriceNovo, PriceAntigoo, ActionContainer, FavoritarContainer, ButtonJogar } from '../../../styles/index'
import { DLine } from '../../../containers/AreaPagamento/styles'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'
import Game from '../../../models/jogo'

type Props = Game

type FavoritarGames = {
    id:number
    name:string,
    avaliationGame:number,
    descontPrice:number,
    image:string,
    price:number,
    newPrice: number,
    tag: string
}

const CardJogo = ({ id, name, avaliationGame, descontPrice, image, newPrice, price, tag, description, developmente, realeaseDate }: Props) => {
    const estaNaBiblioteca = false // somente para os testes
    const dispatch = useDispatch()

    const adicionarGame = () => {
        dispatch(add({
            id, name, image, price, newPrice, avaliationGame, descontPrice,
            description, developmente, realeaseDate, tag
        }))
    }

    const favoritarGame = ({ id, name, avaliationGame, descontPrice, image, price, newPrice, tag }: FavoritarGames) => {
        const key = id
        const GameObject = {
          id, name, avaliationGame, descontPrice, image, price, newPrice, tag
        }

       console.log(localStorage.setItem(JSON.stringify(key), JSON.stringify(GameObject)))
      }

    return (
        <S.CardGame estaNaBiblioteca={estaNaBiblioteca}>
            <S.CardIMG>
                { estaNaBiblioteca ? (
                    ''
                ) : (
                <FavoritarContainer>
                    <BotaoAcao title='Favoritar game' action={() => favoritarGame({id, name, avaliationGame, descontPrice, image, price, newPrice, tag})}>
                        {Icones.coracao}
                    </BotaoAcao>
                        {descontPrice <=0 ? (
                            ''
                        ) : ( 
                            <S.TagDescontoo>
                                {descontPrice+'%'}
                            </S.TagDescontoo> 
                        )}
                </FavoritarContainer>
                )}
                <img src={image} alt="jogo" />
            </S.CardIMG>
            <S.ContainerDescription>
                <P as="h4" fontSize={14} marginBottom={4} >{ name }</P>
                {estaNaBiblioteca ? (
                <S.AvaliacoesBiblioteca>
                    <S.avaliationsIcone>
                        {Icones.estrela}
                        <P fontSize={16}>{avaliationGame}</P>
                    </S.avaliationsIcone>
                    <Categoriaa>
                        {tag}
                    </Categoriaa>
                </S.AvaliacoesBiblioteca>
                ) : (
                <Avaliations>
                    <Categoriaa>
                        {tag}
                    </Categoriaa>
                    <Avaliatioon>
                        {Icones.estrela}
                        <P fontSize={16}>{avaliationGame}</P>
                        
                    </Avaliatioon>
                </Avaliations>
                )}
                <ActionContainer>
                <ContainerPrices>
                {estaNaBiblioteca ? (
                        <S.HorasJogadas>
                            <div>
                                {Icones.relogio}
                            </div>
                            <Paragrafo fontSize={12} marginBottom={4} tipo='Secundario'>15h Jogadas</Paragrafo>
                        </S.HorasJogadas>
                    ) : (
                    <>
                        <PriceAntigoo>
                            R${price}
                        </PriceAntigoo>
                        {descontPrice <= 0 ? (
                            ''
                        ) : (
                            <PriceNovo>
                                R${newPrice}
                            </PriceNovo>
                        )}
                    </>
                    )}
                </ContainerPrices>
                {estaNaBiblioteca ? (
                    ''
                ) : (
                    <S.ButtonCart title='Adicionar ao carrinho' action={adicionarGame}> 
                        {Icones.carrinho}
                    </S.ButtonCart>
                )}
                </ActionContainer>
                {estaNaBiblioteca && (
                    <DLine/>
                )}
                {estaNaBiblioteca && (
                    <S.Jogar>
                        <ButtonJogar title='Iniciar Game'>
                            {Icones.pause}
                            jogar agora
                        </ButtonJogar>
                    </S.Jogar>
                )}
            </S.ContainerDescription>
        </S.CardGame>
    )
}

export default CardJogo