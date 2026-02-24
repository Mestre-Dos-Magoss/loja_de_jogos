import { JSX } from 'react'
import * as S from './styles'

export type Props = {
    title: string
    children: string | JSX.Element,
    action?: () => void // action não é obrigtória no momento, mas será no futuro
    className?: string
}

const Button = ({ children, action, className, title }: Props) => (
    <S.Botao title={title} className={className} onClick={action}>
        {children}
    </S.Botao>
)

export default Button