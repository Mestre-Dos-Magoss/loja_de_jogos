import Paragrafo from '../../Paragrafo'
import * as S from './styles'

type Props = {
  svg: React.ReactNode
  title: string
  conquest: string | number
  color: string
}

const CardConquista = ({ title, svg, conquest, color }: Props) => {
  return (
    <S.Card className="conquista">
      <div className="Card-conquista">
        <S.Img color={color}>{svg}</S.Img>
      </div>
      <S.Text>
        <Paragrafo fontSize={14} marginBottom={4} tipo="Secundario">
          {title}
        </Paragrafo>
        <Paragrafo fontSize={16}>{conquest}</Paragrafo>
      </S.Text>
    </S.Card>
  )
}

export default CardConquista
