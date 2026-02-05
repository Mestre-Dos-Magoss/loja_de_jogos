import Icones from '../../../styles/icones'
import { ContainerImg, IconsContainer, LogoContainer } from '../../../styles/index'
import * as S from './styles'

export type Props = {
    Active?: boolean
}

const HeaderLoja = ({ Active }: Props) => {

    return (
        <S.Header>
            <S.FormContainer>
                <S.FormContainerComponents>
                    <LogoContainer>
                        <ContainerImg>
                            {Icones.controle}
                        </ContainerImg>
                        <p>GamesStore</p>
                    </LogoContainer>
                    <S.IsSelected Active >
                        {Icones.loja}
                        Loja
                    </S.IsSelected>
                    <S.IsSelected >
                        {Icones.biblioteca}
                        Biblioteca
                    </S.IsSelected>
                </S.FormContainerComponents>
                    <S.SearchContainer>
                        {Icones.lupa}
                        <S.Search type="search" placeholder="Buscar jogos..." />
                    </S.SearchContainer>
                <S.FormContainerComponents>
                    <IconsContainer>
                        {Icones.sol}
                    </IconsContainer>
                    <S.IsSelected>
                        {Icones.pessoa}
                        Juliano
                    </S.IsSelected>
                    <IconsContainer>
                        {Icones.coracao}
                    </IconsContainer>
                    <IconsContainer>
                        {Icones.carrinho}
                    </IconsContainer>
                </S.FormContainerComponents>
            </S.FormContainer>
        </S.Header>
    )
}

export default HeaderLoja