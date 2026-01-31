import { Campo, CampoContainer, PagamentoHeaderItemVariante } from "../../../../styles"
import * as S from './styles'

const ContainerCartao = () => {
  return (
    <>
      <PagamentoHeaderItemVariante>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-credit-card w-5 h-5 text-purple-500" data-fg-cjnp68="35.22:99.217:/components/CheckoutSection.tsx:292:19:10766:50:e:CreditCard::::::xbJ"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
            Informações do Cartão
      </PagamentoHeaderItemVariante>
        <CampoContainer>
            <label htmlFor="">número do cartão </label>
            <Campo type="number" placeholder="1234 4578 9012 3456" id="" />
        </CampoContainer>
        <CampoContainer>
            <label htmlFor="">nome do cartão </label>
            <Campo type="text" placeholder="NOME SOBRENOME" id="" />
        </CampoContainer>
        <CampoContainer>
            <label htmlFor="">número do cartão </label>
            <Campo type="number" placeholder="1234 4578 9012 3456" id="" />
        </CampoContainer>
        <S.InfosDoCartao>
            <div>
                <S.Label htmlFor=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar w-4 h-4" data-fg-cjnp88="35.22:99.217:/components/CheckoutSection.tsx:337:23:12841:32:e:Calendar::::::C7bG"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    validade
                </S.Label>
                <Campo type="date" id="" />
            </div>
            <div>
                <Campo type="date" id="" />
            </div>
            <div>
                <S.Label htmlFor="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock w-4 h-4" data-fg-cjnp110="35.22:99.217:/components/CheckoutSection.tsx:387:23:15275:28:e:Lock::::::BF49"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    CVV
                </S.Label>
                <Campo type="number" placeholder="123" id="" />
            </div>
        </S.InfosDoCartao> 
    </>
  )
}

export default ContainerCartao