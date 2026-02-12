import Game from '../../../models/jogo'
import { DLine } from '../../../containers/AreaPagamento/styles'

import Icones from '../../../styles/icones'
import { Avaliations, Avaliatioon, Categoriaa, ContainerPrices, IconsContainer, PriceNovo, PriceAntigoo, ActionContainer, FavoritarContainer, ButtonJogar } from '../../../styles/index'
import Paragrafo from '../../Paragrafo'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'

type Props = {
    jogo: Game
}

const CardJogo = ({ jogo }: Props) => {
    const estaNaBiblioteca = false // somente para os testes
    return (
        <S.CardGame estaNaBiblioteca={estaNaBiblioteca}>
            <S.CardIMG>
                { estaNaBiblioteca ? (
                    ''
                ) : (
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
                )}
                <img src={jogo.image} alt="jogo" />
            </S.CardIMG>
            <S.ContainerDescription>
                <P as="h4" fontSize={14} marginBottom={4} >{ jogo.name }</P>
                {estaNaBiblioteca ? (
                <S.AvaliacoesBiblioteca>
                    <S.avaliationsIcone>
                        {Icones.estrela}
                        <P fontSize={16}>{jogo.avaliationGame}</P>
                    </S.avaliationsIcone>
                    <Categoriaa>
                        {jogo.tag}
                    </Categoriaa>
                </S.AvaliacoesBiblioteca>
                ) : (
                <Avaliations>
                    <Categoriaa>
                        {jogo.tag}
                    </Categoriaa>
                    <Avaliatioon>
                        {Icones.estrela}
                        <P fontSize={16}>{jogo.avaliationGame}</P>
                        
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
                            R${jogo.price}
                        </PriceAntigoo>
                        {jogo.descontPrice <= 0 ? (
                            ''
                        ) : (
                            <PriceNovo>
                                R${jogo.newPrice}
                            </PriceNovo>
                        )}
                    </>
                    )}
                </ContainerPrices>
                {estaNaBiblioteca ? (
                    ''
                ) : (
                    <S.ButtonCart type='submit'> 
                        {Icones.carrinho}
                    </S.ButtonCart>
                )}
                </ActionContainer>
                {estaNaBiblioteca && (
                    <DLine/>
                )}
                {estaNaBiblioteca && (
                    <S.Jogar>
                        <ButtonJogar>
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