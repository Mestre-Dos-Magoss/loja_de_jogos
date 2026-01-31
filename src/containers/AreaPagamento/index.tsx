import { useState } from 'react'

import CardCompras from '../../components/Loja/Card_compras'
import OpcoesPagamento from '../../components/Loja/OpcoesPagamento'
import ContainerBoletoPIX from '../../components/Loja/ContainersPagamento/Boleto_PIX/boleto_pix'
import ContainerCartao from '../../components/Loja/ContainersPagamento/Cartao'
import * as enums from '../../utils/enuns/formasDePagamento'

import { P } from '../../components/Paragrafo/Paragrafo'
import { ButtonCarrinho, Campo, CampoContainer, CarrinhoProdutos, MensagemPagamento, PagamentoHeaderItem } from '../../styles'
import * as S from './styles'

const AreaPagamento = () => {
    const [pagamentoSelecionado, setPagamentoSelecionado] = useState(enums.FormasDePagamento.PIX)
    const FormasPagamento = [
        {
            svg:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-credit-card w-6 h-6 mx-auto mb-2 text-purple-500" data-fg-cjnp41="35.22:99.217:/components/CheckoutSection.tsx:224:17:7690:179:e:CreditCard::::::xbJ"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>,tipo: enums.FormasDePagamento.CARTAO,
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-qr-code w-6 h-6 mx-auto mb-2 text-slate-400 dark:text-slate-600" data-fg-cjnp45="35.22:99.217:/components/CheckoutSection.tsx:239:17:8425:167:e:QrCode::::::DoCY"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>, tipo: enums.FormasDePagamento.PIX,
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-barcode w-6 h-6 mx-auto mb-2 text-slate-400 dark:text-slate-600" data-fg-cjnp49="35.22:99.217:/components/CheckoutSection.tsx:254:17:9151:171:e:Barcode::::::DHaC"><path d="M3 5v14"></path><path d="M8 5v14"></path><path d="M12 5v14"></path><path d="M17 5v14"></path><path d="M21 5v14"></path></svg>,tipo: enums.FormasDePagamento.BOLETO,
        }
    ]

    const paymentText = (): string => {
        let mensagem = ''

        if (pagamentoSelecionado === enums.FormasDePagamento.CARTAO) return mensagem = 'confirma pagamento R$ 22.00'
        else if ( pagamentoSelecionado === enums.FormasDePagamento.BOLETO) return mensagem = 'confirmar e gerar boleto'
        return mensagem = 'confirmar e gerar PIX'
    }
    
    const retornaBoletoOuPIX = () => {
        if(pagamentoSelecionado === enums.FormasDePagamento.PIX) return <ContainerBoletoPIX tipoDePagamento={enums.FormasDePagamento.PIX}/>
        if(pagamentoSelecionado === enums.FormasDePagamento.BOLETO) return <ContainerBoletoPIX tipoDePagamento={enums.FormasDePagamento.BOLETO}/>
    }

    return (
        <S.AreaPagamento>
            <div>
                <S.Aviso>
                    <P as="h3" fontSize={32} >
                        Revise o seu pedido
                    </P>
                    </S.Aviso>
                <S.ContainerRevisar>
                    <CardCompras /> {/* será passadas as props*/}
                </S.ContainerRevisar>
            </div>
            <S.Pagamento>
                <S.PagamentoHeader>
                    <PagamentoHeaderItem>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2" data-fg-cjnp4="35.22:99.217:/components/CheckoutSection.tsx:183:11:5670:38:e:ArrowLeft::::::j3k"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        <P as="p" fontSize={14} >voltar ao carrinho</P> 
                    </PagamentoHeaderItem>
                </S.PagamentoHeader>
                <CarrinhoProdutos temProdutos>
                    <p>Resumo do Pedido</p>
                    <S.ResumoPedido>
                        <S.ResumoPedidoItem>
                            <span>Itens (1)</span>
                            <span>R$ 20.00</span>
                        </S.ResumoPedidoItem>
                        <S.ResumoPedidoItem>
                            <span> Impostos </span>
                            <span> R$ 2.00 </span>
                        </S.ResumoPedidoItem>
                        <S.DLine />
                        <S.ResumoPedidoItem>
                            <span> Total </span>
                            <span> R$ 21.99 </span>  
                        </S.ResumoPedidoItem>
                    </S.ResumoPedido>
                    <div>
                        <p>Formas de Pagamento</p>  
                    </div>
                    <S.FormasDePagamento>
                        { FormasPagamento.map(({ svg, tipo }) => (
                            <OpcoesPagamento key={tipo} svg={svg} tipoPagamento={tipo} ativo={tipo === pagamentoSelecionado} onSelect={() => setPagamentoSelecionado(tipo)}/>
                        ))}
                    </S.FormasDePagamento>
                    <CampoContainer>
                    <S.DLine />
                        <label htmlFor="">email para recebimento</label>
                        <Campo type="email" placeholder="seu@email.com" id="" />
                    </CampoContainer>
                    <S.InfomaoesPagamento>
                    <S.DLine />
                    {pagamentoSelecionado === enums.FormasDePagamento.CARTAO ? (
                        <ContainerCartao />
                    ) : (
                        retornaBoletoOuPIX()
                    )}
                        <MensagemPagamento>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock w-4 h-4 text-purple-400 dark:text-purple-600 mt-0.5 flex-shrink-0" data-fg-cjnp192="35.22:99.217:/components/CheckoutSection.tsx:551:17:22821:86:e:Lock::::::BF49"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            Suas informações estão seguras. Todos os pagamentos são processados de forma criptografada.
                        </MensagemPagamento> 
                    </S.InfomaoesPagamento>
                </CarrinhoProdutos>
                <S.PagamentoFooter temProdutos>
                    <ButtonCarrinho>
                        {paymentText()}
                    </ButtonCarrinho>
                </S.PagamentoFooter>
            </S.Pagamento>
        </S.AreaPagamento>
    )
}

export default AreaPagamento