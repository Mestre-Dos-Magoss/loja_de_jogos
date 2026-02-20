import Game from '../../../models/jogo'
import { DLine } from '../../../containers/AreaPagamento/styles'

import Icones from '../../../styles/icones'
import { Avaliations, Avaliatioon, Categoriaa, ContainerPrices, IconsContainer, PriceNovo, PriceAntigoo, ActionContainer, FavoritarContainer, ButtonJogar } from '../../../styles/index'
import Paragrafo from '../../Paragrafo'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'

type Props = {
  name: string
  image: string
  avaliationGame: number
  tag: string
  price: number
  newPrice: number
  descontPrice: number
}

const CardJogo = ({ name, avaliationGame, descontPrice, image, newPrice, price, tag }: Props) => {
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