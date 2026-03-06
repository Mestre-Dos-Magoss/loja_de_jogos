import Game from '../../../models/jogo'
import { ButtonJogar, ButtonsIcons, Categoriaa } from '../../../styles'
import Icones from '../../../styles/icones'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'

type Props = {
  jogo: Game
}

const CardInLine = ({ jogo }: Props) => (
  <S.CardInLine>
    <S.ImgGame>
      <img src={jogo.image} alt={`Imagem do jogo ${jogo.name}`} />
    </S.ImgGame>
    <S.NameGame>
      <div>
        <P fontSize={18} marginBottom={8}>
          {jogo.name}
        </P>
      </div>
      <S.InfosContainer>
        <S.Avaliacao>
          {Icones.estrela}
          <P fontSize={16}>{jogo.avaliationGame}</P>
        </S.Avaliacao>
        <div>
          <Categoriaa>
            <P fontSize={14}>{jogo.tag}</P>
          </Categoriaa>
        </div>
        <S.AvaliacaoTemp>
          {Icones.relogio}
          <P fontSize={14}>15 horas jogadas</P>
        </S.AvaliacaoTemp>
      </S.InfosContainer>
      <S.ButtonsContainer>
        <ButtonJogar>{Icones.pause}jogar agora</ButtonJogar>
        <ButtonsIcons>{Icones.download} download</ButtonsIcons>
      </S.ButtonsContainer>
    </S.NameGame>
  </S.CardInLine>
)

export default CardInLine
