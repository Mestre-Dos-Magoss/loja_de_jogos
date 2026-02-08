import CardConquista from '../../components/Loja/CardConquista'
import Paragrafo from '../../components/Paragrafo'
import Icones from '../../styles/icones'
import * as S from './styles'
import { ButtonsIcons, Container } from '../../styles'
import variaveis from '../../styles/variaveis'
import CardJogo from '../../components/Loja/Card_jogo'
import CardInLine from '../../components/Loja/CardInLine'

const Bibilioteca = () => {
    const GameTest = {
        name: "The Witcher 3: Wild Hunt" ,
        description: "Você é Geralt de Rívia, mercenário matador de monstros. Você está em um continente devastado pela guerra e infestado de monstros para você explorar à vontade. Sua tarefa é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo.",
        image: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
        avaliationGame: 5.0,
        realeaseDate: "18/05/2015",
        developmente: "CD PROJEKT RED",
        tag: "RPG",
        price: 49.99,
        newPrice: 39.99,
        descontPrice: 21,
        id: 1
    }

    const Conquistas = [
        {
            title: 'jogos na biblioteca',
            conquest: 2,
            svg: Icones.trofeu,
            color: `${variaveis.corBotao}`
        },
        {
            title: 'tempo de jogo',
            conquest: 30+'h',
            svg: Icones.relogio,
            color: `${variaveis.corAzul}`
        },
        {
            title: 'conquistas',
            conquest: 100,
            svg: Icones.trofeu,
            color: `${variaveis.corVerdeForte}`
        }
    ]
    return (
        <Container>
            {/* <S.BibliotecaVazia className='biblioteca-vazia'>
                <div>
                    {Icones.trofeu}
                </div>
                <Paragrafo fontSize={20} marginBottom={8}>
                    Sua Biblioteca está Vazia
                </Paragrafo>
                <Paragrafo fontSize={20} marginBottom={32}>
                    Comece a comprar jogos incríveis na loja!
                </Paragrafo>
            </S.BibliotecaVazia> */}
            <S.BibliotecaCheia className='biblioteca-com-produtos'>
                <S.Title>
                    <div>
                        {Icones.trofeu}
                    </div>
                    <Paragrafo fontSize={16}>
                        biblioteca de jogos
                    </Paragrafo>
                </S.Title>
                <S.CardsContainer>
                {Conquistas.map((card) => (
                    <li>
                        <CardConquista title={card.title} conquest={card.conquest} svg={card.svg} color={card.color}/>
                    </li>
                ))}
                </S.CardsContainer>
                <S.ContainerBotoes className='buttons'>
                    <div>
                        <S.ButtonsText>todos</S.ButtonsText>
                        <S.ButtonsText>recentes</S.ButtonsText>
                    </div>
                    <div>
                        <ButtonsIcons>{Icones.menubloquinhos}</ButtonsIcons>
                        <ButtonsIcons>{Icones.menu}</ButtonsIcons>
                    </div>
                </S.ContainerBotoes>
                <div className='lista-de-jogos-comprados'>
                    <CardJogo jogo={GameTest}/>
                    <CardInLine jogo={GameTest}/>
                </div>
            </S.BibliotecaCheia>
        </Container>
    )
}

export default Bibilioteca