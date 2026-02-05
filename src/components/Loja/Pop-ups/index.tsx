import { ActionContainer, Avaliatioon, Categoriaa, FavoritarContainer, IconsContainer, Line, PriceAntigo, TagDesconto } from '../../../styles'
import Paragrafo from '../../Paragrafo'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'
import Icones from '../../../styles/icones'


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
                            {Icones.coracao}
                        </IconsContainer>
                        <IconsContainer>
                            {Icones.X}
                        </IconsContainer>
                    </S.Icones>
                </FavoritarContainer>
                <img src='https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f' />
            </S.PopUpImgContainer>
            <S.PopUpDescription>
                <P fontSize={20} marginBottom={16}>The Witcher 3: Wild Hunt</P>
                <S.AvaliationPopUp>
                    <Avaliatioon>
                        {Icones.estrela}
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
                            {Icones.calendario}
                        </div>
                        <div>
                            <P as="p" fontSize={12} >Data de Lançamento</P>
                            <P as="p" fontSize={16} >17/02/26</P>
                        </div>
                    </S.Infos>
                <S.Infos>
                    <div>
                        {Icones.pessoa}
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
                            {Icones.carrinho}
                            adicionar ao carrinho
                        </S.ButtonAction>
                    </div>
                </ActionContainer>
            </S.PopUpDescription>
        </S.PopUpContainer>
    )
}

export default PopUps