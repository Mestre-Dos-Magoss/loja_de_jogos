import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useNavigate } from 'react-router-dom'

import OpcoesPagamento from '../../components/Loja/OpcoesPagamento'
import ContainerBoletoPIX from '../../components/Loja/ContainersPagamento/Boleto_PIX/boleto_pix'
import ContainerCartao from '../../components/Loja/ContainersPagamento/Cartao'
import CardCompras from '../../components/Loja/Card_compras'
import * as enums from '../../utils/enuns/formasDePagamento'

import Icones from '../../styles/icones'
import { P } from '../../components/Paragrafo/Paragrafo'
import {
  ButtonCarrinho,
  Campo,
  CampoContainer,
  CarrinhoProdutos,
  MensagemPagamento,
  PagamentoHeaderItem
} from '../../styles'
import * as S from './styles'

const AreaPagamento = () => {
  const itens = useSelector((state: RootState) => state.shoppingCart.itens)
  const navigate = useNavigate()
  const subTotal = (): number => {
    return itens.reduce((total, item) => {
      const preco = Number(item.newPrice) || Number(item.price)
      return Math.ceil(total + preco)
    }, 0)
  }
  const impostos = (valor: number): number => {
    return itens.reduce((total, item) => {
      const imposto = valor
      return total + imposto
    }, 0)
  }
  const imposto = 3.5
  const total = subTotal() + impostos(imposto)

  const [pagamentoSelecionado, setPagamentoSelecionado] = useState(
    enums.FormasDePagamento.PIX
  )
  const FormasPagamento = [
    {
      svg: Icones.cartao,
      tipo: enums.FormasDePagamento.CARTAO
    },
    {
      svg: Icones.pix,
      tipo: enums.FormasDePagamento.PIX
    },
    {
      svg: Icones.boleto,
      tipo: enums.FormasDePagamento.BOLETO
    }
  ]

  const paymentText = (): string => {
    let mensagem = ''

    if (pagamentoSelecionado === enums.FormasDePagamento.CARTAO)
      return (mensagem = 'confirma pagamento R$ 22.00')
    else if (pagamentoSelecionado === enums.FormasDePagamento.BOLETO)
      return (mensagem = 'confirmar e gerar boleto')
    return (mensagem = 'confirmar e gerar PIX')
  }

  const retornaBoletoOuPIX = () => {
    if (pagamentoSelecionado === enums.FormasDePagamento.PIX)
      return (
        <ContainerBoletoPIX tipoDePagamento={enums.FormasDePagamento.PIX} />
      )
    if (pagamentoSelecionado === enums.FormasDePagamento.BOLETO)
      return (
        <ContainerBoletoPIX tipoDePagamento={enums.FormasDePagamento.BOLETO} />
      )
  }

  return (
    <S.AreaPagamento>
      <div>
        <S.Aviso>
          <P as="h3" fontSize={32}>
            Revise o seu pedido
          </P>
        </S.Aviso>
        <S.ContainerRevisar>
          {itens.map((j) => (
            <li>
              <CardCompras
                size="big"
                key={j.id}
                description={j.description}
                id={j.id}
                image={j.image}
                name={j.name}
                newPrice={j.newPrice}
                price={j.price}
                tag={j.tag}
              />
            </li>
          ))}
        </S.ContainerRevisar>
      </div>
      <S.Pagamento>
        <S.PagamentoHeader>
          <PagamentoHeaderItem>
            {Icones.seta}
            <P as="p" fontSize={14}>
              voltar ao carrinho
            </P>
          </PagamentoHeaderItem>
        </S.PagamentoHeader>
        <CarrinhoProdutos temProdutos={true}>
          <p>Resumo do Pedido</p>
          <S.ResumoPedido>
            <S.ResumoPedidoItem>
              <span>Itens ({itens.length})</span>
              <span>R$ {subTotal()}</span>
            </S.ResumoPedidoItem>
            <S.ResumoPedidoItem>
              <span> Impostos </span>
              <span> R$ {imposto} </span>
            </S.ResumoPedidoItem>
            <S.DLine />
            <S.ResumoPedidoItem>
              <span> Total </span>
              <span> R$ {total} </span>
            </S.ResumoPedidoItem>
          </S.ResumoPedido>
          <div>
            <p>Formas de Pagamento</p>
          </div>
          <S.FormasDePagamento>
            {FormasPagamento.map(({ svg, tipo }) => (
              <OpcoesPagamento
                key={tipo}
                svg={svg}
                tipoPagamento={tipo}
                ativo={tipo === pagamentoSelecionado}
                onSelect={() => setPagamentoSelecionado(tipo)}
              />
            ))}
          </S.FormasDePagamento>
          <CampoContainer>
            <S.DLine />
            <label htmlFor="">email para recebimento</label>
            <Campo type="email" placeholder="seu@email.com" id="" />
          </CampoContainer>
          <S.InfomaoesPagamento>
            {' '}
            {/* Esta área irá mudar a depender da opção de pagamento escolhida pelo usuário*/}
            <S.DLine />
            {pagamentoSelecionado === enums.FormasDePagamento.CARTAO ? (
              <ContainerCartao />
            ) : (
              retornaBoletoOuPIX()
            )}
            <MensagemPagamento>
              {Icones.cadeado}
              Suas informações estão seguras. Todos os pagamentos são
              processados de forma criptografada.
            </MensagemPagamento>
          </S.InfomaoesPagamento>
        </CarrinhoProdutos>
        <S.PagamentoFooter temProdutos>
          <ButtonCarrinho
            title="Finalizar comprar"
            action={() => navigate('/library')}
          >
            {paymentText()}
          </ButtonCarrinho>{' '}
          {/*botao irá mudar a depender da opção escolhida */}
        </S.PagamentoFooter>
      </S.Pagamento>
    </S.AreaPagamento>
  )
}

export default AreaPagamento
