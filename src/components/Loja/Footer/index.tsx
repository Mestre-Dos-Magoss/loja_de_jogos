import * as S from './styles'
import { Container, ContainerImg, LogoContainer } from "../../../styles"
import Paragrafo from "../../Paragrafo"

const Footer = () => (
<S.Teste>
    <S.ContainerFooter>
        <S.Footer>
            <div>
                <S.LogoContainerFooter>
                    <ContainerImg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gamepad2 lucide-gamepad-2 w-10 h-10 text-white" aria-hidden="true"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg> 
                    </ContainerImg>
                    <Paragrafo fontSize={16}>Games Store</Paragrafo>
                </S.LogoContainerFooter>
                <Paragrafo fontSize={14} marginBottom={16} >Sua loja de jogos digitais favorita. Milhares de jogos com os melhores preços e promoções exclusivas.</Paragrafo>
                <S.ContainerRedes>
                    <S.RedesSocial>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook w-5 h-5 text-slate-400 dark:text-slate-600 hover:text-white" data-fg-d3tn14="49.11:49.8109:/components/Footer.tsx:28:17:1369:84:e:Facebook::::::CQHS"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </S.RedesSocial>
                    <S.RedesSocial>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
                    </S.RedesSocial>
                    <S.RedesSocial>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram w-5 h-5 text-slate-400 dark:text-slate-600 hover:text-white" data-fg-d3tn18="49.11:49.8109:/components/Footer.tsx:42:17:2074:85:e:Instagram::::::huc"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </S.RedesSocial>
                    <S.RedesSocial>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube w-5 h-5 text-slate-400 dark:text-slate-600 hover:text-white" data-fg-d3tn20="49.11:49.8109:/components/Footer.tsx:49:17:2427:83:e:Youtube::::::BvAB"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" data-fg-d3tn67="49.11:49.8109:/components/Footer.tsx:123:17:5611:65:e:Mail::::::BKNf"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div>
                        <Paragrafo fontSize={14} tipo='Secundario'marginBottom={8} >Email</Paragrafo>
                        <a href="">contato@gamestore.com</a>
                    </div>
                </S.ContatoItens>
                <S.ContatoItens>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" data-fg-d3tn74="49.11:49.8109:/components/Footer.tsx:132:17:6143:66:e:Phone::::::Cdqw"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                        <Paragrafo fontSize={14} tipo='Secundario' marginBottom={8} >Telefone</Paragrafo>
                        <a href="">(11) 99999-9999</a>
                    </div>
                </S.ContatoItens>
                <S.ContatoItens>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" data-fg-d3tn81="49.11:49.8109:/components/Footer.tsx:141:17:6663:67:e:MapPin::::::ECmr"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                        <Paragrafo fontSize={14} tipo='Secundario' marginBottom={8} >Endereço</Paragrafo>
                        São Paulo, SP - Brasil
                    </div>
                </S.ContatoItens>
            </S.Contato>
        </S.Footer>
        <S.Line />
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