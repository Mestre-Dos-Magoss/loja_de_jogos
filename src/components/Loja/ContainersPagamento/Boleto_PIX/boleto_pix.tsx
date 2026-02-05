import * as enums from '../../../../utils/enuns/formasDePagamento'

import {Campo, CampoContainer, ContainerPagamentoCinza, ContainerPagamento as ContainerPagamentos, PagamentoHeaderItemVariante} from '../../../../styles/index'
import { P } from '../../../Paragrafo/Paragrafo'
import Icones from '../../../../styles/icones'
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
                    {Icones.pix}
                    PIX Copia e Cola
                </>
            ) : (
                <>
                {Icones.boleto}
                Boleto Bancário
                </>
            )}
        </PagamentoHeaderItemVariante>
        <ContainerPagamentoCinza> 
            {tipoDePagamento === enums.FormasDePagamento.PIX ? (
                Icones.pix
            ) : (
                Icones.boleto
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
                {Icones.copiar}
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