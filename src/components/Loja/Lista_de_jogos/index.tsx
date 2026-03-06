import Game from '../../../models/jogo'
import CardJogo from '../Card_jogo'

import Paragrafo from '../../Paragrafo'
import * as S from './styles'
import { ReactElement } from 'react'

export type Props = {
  jogos: Game[]
  title: string
  icon?: ReactElement
  colorIcon?: string
}
const ListaDeJogos = ({ jogos, title, icon, colorIcon }: Props) => {
  return (
    <S.ContainerCards>
      <div>
        <S.Secao>
          <S.ColorIcon colorIcon={colorIcon}>{icon}</S.ColorIcon>
          <Paragrafo fontSize={16}>{title}</Paragrafo>
        </S.Secao>
        <S.ListContainer>
          {jogos.length && (
            <>
              {jogos.map((jogo) => (
                <li key={jogo.id}>
                  <CardJogo
                    key={jogo.id}
                    name={jogo.name}
                    avaliationGame={jogo.avaliationGame}
                    image={jogo.image}
                    descontPrice={jogo.descontPrice}
                    price={jogo.price}
                    newPrice={jogo.newPrice}
                    tag={jogo.tag}
                    description={jogo.description}
                    developmente={jogo.developmente}
                    realeaseDate={jogo.realeaseDate}
                    id={jogo.id}
                  />
                </li>
              ))}
            </>
          )}
        </S.ListContainer>
      </div>
    </S.ContainerCards>
  )
}

export default ListaDeJogos
