import Icones from '../../../styles/icones'
import { ContainerImg, Line } from "../../../styles"
import Paragrafo from "../../Paragrafo"
import * as S from './styles'

const Footer = () => (
<S.Teste>
    <S.ContainerFooter>
        <S.Footer>
            <div>
                <S.LogoContainerFooter>
                    <ContainerImg>
                        {Icones.controle}
                    </ContainerImg>
                    <Paragrafo fontSize={16}>Games Store</Paragrafo>
                </S.LogoContainerFooter>
                <Paragrafo fontSize={14} marginBottom={16} >Sua loja de jogos digitais favorita. Milhares de jogos com os melhores preços e promoções exclusivas.</Paragrafo>
                <S.ContainerRedes>
                    <S.RedesSocial>
                        {Icones.facebook}
                    </S.RedesSocial>
                    <S.RedesSocial>
                        {Icones.xTwetter}
                    </S.RedesSocial>
                    <S.RedesSocial>
                        {Icones.instagram}
                    </S.RedesSocial>
                    <S.RedesSocial>
                        {Icones.youtube}
                    </S.RedesSocial>
                </S.ContainerRedes>
            </div>
            <S.LinksUteis>
                <Paragrafo fontSize={16} marginBottom={10}>Links Úteis</Paragrafo>
                <ul>
                    <li>
                        <a href="">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="">Como Funciona</a>
                    </li>
                    <li>
                        <a href="">Promoções</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Carreiras</a>
                    </li>
                </ul>
            </S.LinksUteis>
            <S.LinksUteis>
                <Paragrafo fontSize={16} marginBottom={10}>Suporte</Paragrafo>
                <ul>
                    <li>
                        <a href="">Central de Ajuda</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">Política de Reembolso</a>
                    </li>
                    <li>
                        <a href="">Termos de Uso</a> 
                    </li>
                    <li>
                        <a href="">Política de Privacidade</a>
                    </li>
                </ul>
            </S.LinksUteis>
            <S.Contato>
                <Paragrafo fontSize={16} marginBottom={10}>Contato</Paragrafo>
                <S.ContatoItens>
                    <div>
                        {Icones.email}
                    </div>
                    <div>
                        <Paragrafo fontSize={14} tipo='Secundario'marginBottom={8} >Email</Paragrafo>
                        <a href="">contato@gamestore.com</a>
                    </div>
                </S.ContatoItens>
                <S.ContatoItens>
                    <div>
                        {Icones.telefone}
                    </div>
                    <div>
                        <Paragrafo fontSize={14} tipo='Secundario' marginBottom={8} >Telefone</Paragrafo>
                        <a href="">(11) 99999-9999</a>
                    </div>
                </S.ContatoItens>
                <S.ContatoItens>
                    <div>
                        {Icones.localizacao}
                    </div>
                    <div>
                        <Paragrafo fontSize={14} tipo='Secundario' marginBottom={8} >Endereço</Paragrafo>
                        São Paulo, SP - Brasil
                    </div>
                </S.ContatoItens>
            </S.Contato>
        </S.Footer>
        <Line />
        <S.TermosContainer>
           <Paragrafo fontSize={14}>&copy; 2026 GameStore. Todos os direitos reservados.</Paragrafo>
            <ul>
                <li>
                    <a href="">termos de serviço</a>
                </li>
                <li>
                    <a href="">privacidade</a>
                </li>
                <li>
                    <a href="">coockies</a>
                </li>
            </ul>
        </S.TermosContainer>
    </S.ContainerFooter>
</S.Teste>
)

export default Footer