import Icones from '../../../styles/icones'
import Paragrafo from '../../Paragrafo'

import * as S from './style'

export type Props = {
  children: React.ReactNode
}

const Categorias = ({ children }: Props) => {
  return (
    <S.CategoriaContainer>
      <S.CategoriaTitle>
        {Icones.setaSubindo}
        <Paragrafo fontSize={16} tipo="Secundario">
          Categorias
        </Paragrafo>
      </S.CategoriaTitle>
      <S.Categoria>{children}</S.Categoria>
    </S.CategoriaContainer>
  )
}

export default Categorias
