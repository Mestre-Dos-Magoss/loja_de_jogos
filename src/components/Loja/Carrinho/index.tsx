import * as S from './styles'
import { P } from "../../Paragrafo/Paragrafo"
import { PriceNovo, PriceAntigoo, CarrinhoHeader, CarrinhoProdutos, ButtonCarrinho, CarrinhoFooter, InfosGame } from '../../../styles'

const Carrinho = () => (
    <S.CarrinhoContainer>
        <CarrinhoHeader>
            <S.CarrinhoLogo>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag w-5 h-5 text-purple-500" data-fg-cuyl11="21.32:35.1540:/components/CartDrawer.tsx:67:17:1949:51:e:ShoppingBag::::::sRE"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <P as="p" fontSize={16} >carrinho (4)</P>
            </S.CarrinhoLogo>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x w-5 h-5" data-fg-cuyl17="21.32:35.1540:/components/CartDrawer.tsx:71:17:2291:25:e:X::::::D2Tw"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </div>
        </CarrinhoHeader>
        <CarrinhoProdutos temProdutos>
            {/* <div className='CarrinhoSemprodutos'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag w-16 h-16 text-slate-600 dark:text-slate-700 mb-4" data-fg-cuyl22="21.32:35.1540:/components/CartDrawer.tsx:79:19:2595:77:e:ShoppingBag::::::sRE"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </div>
                <div>
                    <P as="p" fontSize={16} >Seu carrinho está vazio</P>
                    <P as="p" fontSize={14} >Adicione jogos incríveis à sua coleção!</P>
                </div>
            </div> */}
            <S.CarrinhoComProduto>
                <div className='img game'>
                    <img src="  https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f " alt="" />
                </div>
                <InfosGame>
                    <div>
                        <P as="h6" fontSize={14}>The Witcher 3: Wild Hunt</P>
                        <P as="p" fontSize={12}>RPG</P>
                    </div>
                    <div>
                        <PriceAntigoo>
                            25.99
                        </PriceAntigoo>
                        <PriceNovo>
                            19.99
                        </PriceNovo>
                    </div>
                </InfosGame>
                    <S.ExcluirGame>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2 lucide-trash-2 w-4 h-4" data-fg-cuyl49="21.32:35.1540:/components/CartDrawer.tsx:128:27:5273:30:e:Trash2::::::CuIQ"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                    </S.ExcluirGame>
            </S.CarrinhoComProduto>
            <S.CarrinhoComProduto>
                <div>
                    <img src="  https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f " alt="" />
                </div>
                <InfosGame>
                    <div>
                        <P as="h6" fontSize={14}>The Witcher 3: Wild Hunt</P>
                        <P as="p" fontSize={12}>RPG</P>
                    </div>
                    <div>
                        <PriceAntigoo>
                            25.99
                        </PriceAntigoo>
                        <PriceNovo>
                            19.99
                        </PriceNovo>
                    </div>
                </InfosGame>
                    <S.ExcluirGame>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2 lucide-trash-2 w-4 h-4" data-fg-cuyl49="21.32:35.1540:/components/CartDrawer.tsx:128:27:5273:30:e:Trash2::::::CuIQ"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                    </S.ExcluirGame>
            </S.CarrinhoComProduto>
        </CarrinhoProdutos>
        <CarrinhoFooter temProdutos>
            <S.CarrinhoSubTotal>
                <P as="p" fontSize={16} >subtotal</P>
                <P as="p" fontSize={16} >R$ 100.00</P>
            </S.CarrinhoSubTotal>
            <ButtonCarrinho>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-credit-card w-4 h-4 mr-2" data-fg-cuyl60="21.32:35.1540:/components/CartDrawer.tsx:148:19:6136:39:e:CreditCard::::::xbJ"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                ir para o pagamento
            </ButtonCarrinho>
        </CarrinhoFooter>
    </S.CarrinhoContainer>
)

export default Carrinho