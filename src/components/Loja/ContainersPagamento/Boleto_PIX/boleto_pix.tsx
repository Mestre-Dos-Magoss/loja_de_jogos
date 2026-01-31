import * as enums from '../../../../utils/enuns/formasDePagamento'

import {Campo, CampoContainer, ContainerPagamentoCinza, ContainerPagamento as ContainerPagamentos, PagamentoHeaderItemVariante} from '../../../../styles/index'
import { P } from '../../../Paragrafo/Paragrafo'
import * as S from './styles'

type Props = {
  tipoDePagamento?: enums.FormasDePagamento.PIX | enums.FormasDePagamento.BOLETO
}

const ContainerBoletoPIX = ({ tipoDePagamento }: Props) => {
    return (
        <>
    <CampoContainer>
        <label htmlFor="">CPF</label>
        <Campo type="number" placeholder="123.456.789-01" id="" />
    </CampoContainer>
    {}
    <ContainerPagamentos>
         <PagamentoHeaderItemVariante>
            {tipoDePagamento === enums.FormasDePagamento.PIX ? (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-qr-code w-6 h-6" data-fg-cjnp129="35.22:99.217:/components/CheckoutSection.tsx:434:21:17332:30:e:QrCode::::::DoCY"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
                    PIX Copia e Cola
                </>
            ) : (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-barcode w-6 h-6" data-fg-cjnp163="35.22:99.217:/components/CheckoutSection.tsx:502:21:20428:31:e:Barcode::::::DHaC"><path d="M3 5v14"></path><path d="M8 5v14"></path><path d="M12 5v14"></path><path d="M17 5v14"></path><path d="M21 5v14"></path></svg>
                Boleto Bancário
                </>
            )}
        </PagamentoHeaderItemVariante>
        <ContainerPagamentoCinza> 
            {tipoDePagamento === enums.FormasDePagamento.PIX ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-qr-code w-6 h-6" data-fg-cjnp129="35.22:99.217:/components/CheckoutSection.tsx:434:21:17332:30:e:QrCode::::::DoCY"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-barcode w-6 h-6" data-fg-cjnp163="35.22:99.217:/components/CheckoutSection.tsx:502:21:20428:31:e:Barcode::::::DHaC"><path d="M3 5v14"></path><path d="M8 5v14"></path><path d="M12 5v14"></path><path d="M17 5v14"></path><path d="M21 5v14"></path></svg>
            )}
        </ContainerPagamentoCinza>
        <div>
            {tipoDePagamento === enums.FormasDePagamento.PIX ? (
                <P as="p" fontSize={14}>Código PIX</P>
            ) : (
                <P as="p" fontSize={14} >Código de Barras</P>
            )}
            
             <S.ContainerPagamentoCodigo>
                {tipoDePagamento === enums.FormasDePagamento.PIX ? (
                    <span>00020126580014br.gov.bcb.pix013662c4a0e1-4c8b-9d0e-8f5a4b3c2d1e5204000053039865802BR5925GAMESTORE LTDA6009SAO PAULO62070503***63044D3A</span> 
                ) : (
                    <span> 237933812860083013520010112553011748900002199 </span>
                )}
            </S.ContainerPagamentoCodigo>
            <S.ButtonCopiar>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy w-4 h-4 mr-2" data-fg-cjnp146="35.22:99.217:/components/CheckoutSection.tsx:462:27:18753:33:e:Copy::::::EKaP"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            {tipoDePagamento === enums.FormasDePagamento.PIX ? (
                <>
                  copiar chave pix  
                </>
            ) : (
                <>
                  copiar código de barras
                </>
            )}
            </S.ButtonCopiar>
        </div>
            {tipoDePagamento === enums.FormasDePagamento.PIX ? (
                <S.MensagemPix>
                    Após o pagamento, seus jogos serão liberados automaticamente
                </S.MensagemPix> 
            ) : (
                <S.MensagemBoleto>
                    <strong>Vencimento:</strong>
                        <span>
                            23/01/2026
                            O boleto pode ser pago em qualquer banco, casa lotérica ou aplicativo bancário.
                        </span> 
                </S.MensagemBoleto>
            )}
        </ContainerPagamentos>
        </>
    )
}

export default ContainerBoletoPIX