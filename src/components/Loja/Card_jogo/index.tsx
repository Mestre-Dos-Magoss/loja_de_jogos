import { Game } from '../../../App'

import Icones from '../../../styles/icones'
import { Avaliations, Avaliatioon, Categoriaa, ContainerPrices, IconsContainer, PriceNovo, PriceAntigoo, ActionContainer, FavoritarContainer } from '../../../styles/index'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'

type Props = {
    jogo: Game
}

const CardJogo = ({ jogo }: Props) => {
    
    return (
        <S.CardGame>
            <S.CardIMG>
                <FavoritarContainer>
                    <IconsContainer>
                        {Icones.coracao}
                    </IconsContainer>
                        {jogo.descontPrice <=0 ? (
                            ''
                        ) : ( 
                            <S.TagDescontoo>
                                {jogo.descontPrice+'%'}
                            </S.TagDescontoo> 
                        )}
                </FavoritarContainer>
                <img src={jogo.image} alt="jogo" />
            </S.CardIMG>
            <S.ContainerDescription>
                <P as="h4" fontSize={14} marginBottom={4} >{ jogo.name }</P>
                <Avaliations>
                    <Categoriaa>
                        {jogo.tag}
                    </Categoriaa>
                    <Avaliatioon>
                        {Icones.estrela}
                        {jogo.avaliationGame}
                    </Avaliatioon>
                </Avaliations>
                <ActionContainer>
                <ContainerPrices>
                    <PriceAntigoo>
                        R${jogo.price}
                    </PriceAntigoo>
                    {jogo.descontPrice <= 0 ? (
                        ''
                    ) : (
                        <PriceNovo>
                            R${jogo.newPrice}
                        </PriceNovo>
                    )}
                </ContainerPrices>
                    <S.ButtonCart type='submit'> 
                        {Icones.carrinho}
                    </S.ButtonCart>
                </ActionContainer>
            </S.ContainerDescription>
        </S.CardGame>
    )
}

export default CardJogo