import { useState } from 'react'

import Game from '../../models/jogo'
import CardJogo from '../../components/Loja/Card_jogo'
import CardInLine from '../../components/Loja/CardInLine'
import CardConquista from '../../components/Loja/CardConquista'
import Paragrafo from '../../components/Paragrafo'

import Icones from '../../styles/icones'
import * as S from './styles'
import { ButtonsIcons, Container } from '../../styles'
import variaveis from '../../styles/variaveis'
import ListaDeJogos from '../../components/Loja/Lista_de_jogos'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Button from '../../components/Buttons'

type Props = {
  jogo: Game[]
}

const Bibilioteca = ({ jogo }: Props) => {
  const [menuOrLine, setMenuOrLine] = useState(false)
  const { item } = useSelector((state: RootState) => state.favorito) // using favoritoState just now

  const Conquistas = [
    {
      title: 'jogos na biblioteca',
      conquest: item.length,
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
    <>
      <Container>
        {item.length <= 0 ? (
          <S.BibliotecaVazia className="biblioteca-vazia">
            <div>{Icones.trofeu}</div>
            <Paragrafo fontSize={20} marginBottom={8}>
              Sua Biblioteca está Vazia
            </Paragrafo>
            <Paragrafo fontSize={20} marginBottom={32}>
              Comece a comprar jogos incríveis na loja!
            </Paragrafo>
          </S.BibliotecaVazia>
        ) : (
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
                <Button title="">todos</Button>
                <Button title="">recentes</Button>
              </div>
              <div>
                <Button title="" action={() => setMenuOrLine(true)}>
                  {Icones.menubloquinhos}
                </Button>
                <Button title="" action={() => setMenuOrLine(false)}>
                  {Icones.menu}
                </Button>
              </div>
            </S.ContainerBotoes>
            {menuOrLine ? (
              <ListaDeJogos title={''}>
                {jogo.map((jogo) => (
                  <li key={jogo.id}>
                    <CardJogo game={jogo} itsInTheStore={false} />
                  </li>
                ))}
              </ListaDeJogos>
            ) : (
              <ul>
                {jogo.map((jogo) => (
                  <li>
                    <CardInLine key={jogo.id} jogo={jogo} />
                  </li>
                ))}
              </ul>
            )}
          </S.BibliotecaCheia>
        )}
      </Container>
    </>
  )
}

export default Bibilioteca
