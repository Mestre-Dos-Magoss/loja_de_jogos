import { Game } from '../../../App'
import { Avaliations, ContainerPrices, IconsContainer, PriceAntigo, PriceNovo } from '../../../styles/index'

import { P } from '../../Paragrafo/Paragrafo'
import { Button } from '../../Buttons/styles'
import * as S from './styles'

type Props = {
    jogo: Game
}

const CardJogo = ({ jogo }: Props) => {
    
    return (
        <S.CardGame>
            <S.CardIMG>
                <S.FavoritarContainer>
                    <IconsContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" /></svg>
                    </IconsContainer>
                        {jogo.descontPrice <=0 ? (
                            ''
                        ) : ( 
                            <S.TagDescontoo>
                                {jogo.descontPrice+'%'}
                            </S.TagDescontoo> 
                        )}
                </S.FavoritarContainer>
                <img src={jogo.image} alt="jogo" />
            </S.CardIMG>
            <S.ContainerDescription>
                <P as="h4" fontSize={14} marginBottom={4} >{ jogo.name }</P>
                <Avaliations>
                    <S.Categoriaa>
                        {jogo.tag}
                    </S.Categoriaa>
                    <S.Avaliatioon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                        {jogo.avaliationGame}
                    </S.Avaliatioon>
                </Avaliations>
                <S.ActionContainer>
                <ContainerPrices>
                    <S.PriceAntigoo>
                        R${jogo.price}
                    </S.PriceAntigoo>
                    {jogo.descontPrice <= 0 ? (
                        ''
                    ) : (
                        <PriceNovo>
                            R${jogo.newPrice}
                        </PriceNovo>
                    )}
                </ContainerPrices>
                    <S.ButtonCart type='submit'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></svg>
                    </S.ButtonCart>
                </S.ActionContainer>
            </S.ContainerDescription>
        </S.CardGame>
    )
}

export default CardJogo