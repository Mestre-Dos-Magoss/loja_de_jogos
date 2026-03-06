import Game from '../../models/jogo'
import CardJogo from '../../components/Loja/Card_jogo'
import CardInLine from '../../components/Loja/CardInLine'
import CardConquista from '../../components/Loja/CardConquista'
import Paragrafo from '../../components/Paragrafo'

import Icones from '../../styles/icones'
import * as S from './styles'
import { ButtonsIcons, Container } from '../../styles'
import variaveis from '../../styles/variaveis'

type Props = {
  jogo: Game[]
}

const Bibilioteca = ({ jogo }: Props) => {
  const Conquistas = [
    {
      title: 'jogos na biblioteca',
      conquest: 2,
      svg: Icones.trofeu,
      color: `${variaveis.corBotao}`
    },
    {
      title: 'tempo de jogo',
      conquest: 30 + 'h',
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
      <S.BibliotecaCheia className="biblioteca-com-produtos">
        <S.Title>
          <div>{Icones.trofeu}</div>
          <Paragrafo fontSize={16}>biblioteca de jogos</Paragrafo>
        </S.Title>
        <S.CardsContainer>
          {Conquistas.map((card) => (
            <li>
              <CardConquista
                title={card.title}
                conquest={card.conquest}
                svg={card.svg}
                color={card.color}
              />
            </li>
          ))}
        </S.CardsContainer>
        <S.ContainerBotoes className="buttons">
          <div>
            <S.ButtonsText>todos</S.ButtonsText>
            <S.ButtonsText>recentes</S.ButtonsText>
          </div>
          <div>
            <ButtonsIcons>{Icones.menubloquinhos}</ButtonsIcons>
            <ButtonsIcons>{Icones.menu}</ButtonsIcons>
          </div>
        </S.ContainerBotoes>
        <div className="lista-de-jogos-comprados">
          <ul>
            {jogo.map((jogo) => (
              <li>
                <CardJogo
                  key={jogo.id}
                  name={jogo.name}
                  image={jogo.image}
                  avaliationGame={jogo.avaliationGame}
                  descontPrice={jogo.descontPrice}
                  newPrice={jogo.newPrice}
                  price={jogo.price}
                  tag={jogo.tag}
                  description={jogo.description}
                  developmente={jogo.developmente}
                  realeaseDate={jogo.realeaseDate}
                  id={jogo.id}
                />
              </li>
            ))}
          </ul>
          <ul>
            {jogo.map((jogo) => (
              <li>
                <CardInLine key={jogo.id} jogo={jogo} />
              </li>
            ))}
          </ul>
        </div>
      </S.BibliotecaCheia>
    </Container>
  )
}

export default Bibilioteca
