import Paragrafo from "../../Paragrafo"

import * as S from './style'
import { Props } from '../Header/index'

const Categorias = ({ Active }: Props) => {

    return( 
        <S.CategoriaContainer>
            <S.CategoriaTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-5 h-5 text-purple-500" data-fg-b7rw39="0.8:49.89:/App.tsx:229:17:8758:50:e:TrendingUp::::::O17"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
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