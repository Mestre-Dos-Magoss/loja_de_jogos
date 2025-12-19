import * as S from './styles'

type Props = {
    children: string
}

const Button = ({children}: Props) => (
    <S.Button>
        {children}
    </S.Button>
)

export default Button