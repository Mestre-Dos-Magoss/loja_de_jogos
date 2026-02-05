import Icones from '../../../styles/icones'
import Paragrafo from "../../Paragrafo"

import { Props } from '../Header/index'
import * as S from './style'

const Categorias = ({ Active }: Props) => {

    return( 
        <S.CategoriaContainer>
            <S.CategoriaTitle>
                {Icones.setaSubindo}
                <Paragrafo fontSize={16} tipo="Secundario">Categorias</Paragrafo>
            </S.CategoriaTitle>
            <S.Categoria>
                <S.ButtonsCategoria Active>Todos</S.ButtonsCategoria>
                <S.ButtonsCategoria>Ação</S.ButtonsCategoria>
                <S.ButtonsCategoria>RPG</S.ButtonsCategoria>
                <S.ButtonsCategoria>Corrrida</S.ButtonsCategoria>
                <S.ButtonsCategoria>Terror</S.ButtonsCategoria>
                <S.ButtonsCategoria>Esporte</S.ButtonsCategoria>
                <S.ButtonsCategoria>Indie</S.ButtonsCategoria>
                <S.ButtonsCategoria>Aventura</S.ButtonsCategoria>
            </S.Categoria>
        </S.CategoriaContainer>
    )
}

export default Categorias