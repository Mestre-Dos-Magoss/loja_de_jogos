import Paragrafo from '../../Paragrafo'
import * as S from './styles'
import React, { ReactElement, useState } from 'react'

export type Props = {
  children: React.ReactNode
  title: string
  icon?: ReactElement
  colorIcon?: string
  buttonView?: boolean
  id?: string
}

const ListaDeJogos = ({
  children,
  title,
  icon,
  colorIcon,
  buttonView,
  id
}: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <S.ContainerCards id={id}>
      <S.HeaderSection buttonView={buttonView as boolean}>
        <S.Secao>
          <S.ColorIcon colorIcon={colorIcon}>{icon}</S.ColorIcon>
          <Paragrafo fontSize={16}>{title}</Paragrafo>
        </S.Secao>
        <S.ButtonDefault
          action={() => setIsOpen(!isOpen)}
          title="lique aqui para visualizar os seus games favoritados"
        >
          {isOpen ? 'Ocultar' : 'Mostrar'}
        </S.ButtonDefault>
      </S.HeaderSection>
      <S.ListContainer title={title} isOpen={isOpen}>
        {children}
      </S.ListContainer>
    </S.ContainerCards>
  )
}

export default ListaDeJogos
