import { useState } from 'react'
import Icones from '../../../styles/icones'
import { ContainerImg, BotaoAcao, LogoContainer } from '../../../styles/index'
import * as S from './styles'

export type Props = {
    Active?: boolean
}

const HeaderLoja = ({ Active }: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false) //apenas para testar o comportamento
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
                    <S.IsSelectedLink to={'/'} Active >
                            {Icones.loja}
                            Loja
                    </S.IsSelectedLink>
                    <S.IsSelectedLink  to={'/library'}>
                        {Icones.biblioteca}
                        Biblioteca
                    </S.IsSelectedLink>
                </S.FormContainerComponents>
                    <S.SearchContainer>
                        {Icones.lupa}
                        <S.Search type="search" placeholder="Buscar jogos..." />
                    </S.SearchContainer>
                <S.FormContainerComponents>
                    <BotaoAcao title='Trocar tema'>
                        {Icones.sol}
                    </BotaoAcao>
                    <S.IsSelected onClick={() => setIsLoggedIn(!isLoggedIn)}>
                            {Icones.pessoa}
                        Juliano
                        <S.PopUpSair to={'/login'} isActive={isLoggedIn}>
                            <div>
                                {Icones.sair}
                            </div>
                            sair
                        </S.PopUpSair>
                    </S.IsSelected>
                    <BotaoAcao title='Favoritos'>
                        {Icones.coracao}
                    </BotaoAcao>
                    <BotaoAcao title='Ir ao carrinho'>
                            {Icones.carrinho}
                    </BotaoAcao>
                </S.FormContainerComponents>
            </S.FormContainer>
        </S.Header>
    )
}

export default HeaderLoja