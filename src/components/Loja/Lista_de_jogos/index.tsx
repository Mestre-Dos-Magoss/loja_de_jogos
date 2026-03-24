import Paragrafo from '../../Paragrafo'
import * as S from './styles'
import React, { ReactElement } from 'react'

export type Props = {
  children: React.ReactNode
  title: string
  icon?: ReactElement
  colorIcon?: string
}
const ListaDeJogos = ({ children, title, icon, colorIcon }: Props) => {
  return (
    <S.ContainerCards>
      <div>
        <S.Secao>
          <S.ColorIcon colorIcon={colorIcon}>{icon}</S.ColorIcon>
          <Paragrafo fontSize={16}>{title}</Paragrafo>
        </S.Secao>
        <S.ListContainer>{children}</S.ListContainer>
      </div>
    </S.ContainerCards>
  )
}

export default ListaDeJogos
