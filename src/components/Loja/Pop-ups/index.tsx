import { ActionContainer, Avaliatioon, Categoriaa, FavoritarContainer, IconsContainer, Line, PriceAntigo, TagDesconto } from '../../../styles'
import Paragrafo from '../../Paragrafo'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'


const PopUps = () => {
    return (
        <S.PopUpContainer> 
            <S.PopUpImgContainer>
                <FavoritarContainer>
                    <TagDesconto>
                        - 21% off
                    </TagDesconto>
                    <S.Icones>
                        <IconsContainer>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" /></svg>
                        </IconsContainer>
                        <IconsContainer>
                            X
                        </IconsContainer>
                    </S.Icones>
                </FavoritarContainer>
                <img src='https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f' />
            </S.PopUpImgContainer>
            <S.PopUpDescription>
                <P fontSize={20} marginBottom={16}>The Witcher 3: Wild Hunt</P>
                <S.AvaliationPopUp>
                    <Avaliatioon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>4.7</span>
                    </Avaliatioon>
                    <Categoriaa>
                        RPG
                    </Categoriaa>
                </S.AvaliationPopUp>
                <S.PopUpsText>
                    <Paragrafo fontSize={20} marginBottom={24}>Sobre o jogo</Paragrafo>
                    <Paragrafo fontSize={16} marginBottom={24}>Você é Geralt de Rívia, mercenário matador de monstros. Você está em um continente devastado pela guerra e infestado de monstros para você explorar à vontade. Sua tarefa é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo.</Paragrafo>
                </S.PopUpsText>
                <S.InfosJogo>
                    <S.Infos>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar w-5 h-5 text-purple-500" data-fg-cndb40="21.31:36.1141:/components/GameDetailsModal.tsx:91:15:3609:48:e:Calendar::::::C7bG"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        </div>
                        <div>
                            <P as="p" fontSize={12} >Data de Lançamento</P>
                            <P as="p" fontSize={16} >17/02/26</P>
                        </div>
                    </S.Infos>
                <S.Infos>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-5 h-5 text-purple-500" data-fg-cndb47="21.31:36.1141:/components/GameDetailsModal.tsx:98:15:3998:44:e:User::::::COql"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div>
                        <P fontSize={12} >Desenvolvedor</P>
                        <P fontSize={12} >CD PROJEKT RED</P>
                    </div>
                    </S.Infos>
                </S.InfosJogo>
                <S.TagContainer>
                    <Paragrafo fontSize={16} marginBottom={8}>Tags</Paragrafo>
                    <S.Icones>
                        <Categoriaa>RPG</Categoriaa>
                        <Categoriaa>Ação</Categoriaa>
                        <Categoriaa>Aventura</Categoriaa>
                    </S.Icones>
                </S.TagContainer>
                <Line />
                <ActionContainer>
                    <div>
                        <S.PopUpPrice>
                            <S.TagDescontoo>-21%</S.TagDescontoo>
                            <PriceAntigo>49.99</PriceAntigo>
                        </S.PopUpPrice>
                        <S.PrecoNovo>39.99</S.PrecoNovo>
                    </div>
                    <div>
                        <S.ButtonAction>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart w-5 h-5 mr-2" data-fg-cndb81="21.31:36.1141:/components/GameDetailsModal.tsx:150:15:5996:41:e:ShoppingCart::::::BRps"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                            adicionar ao carrinho
                        </S.ButtonAction>
                    </div>
                </ActionContainer>
            </S.PopUpDescription>
        </S.PopUpContainer>
    )
}

export default PopUps