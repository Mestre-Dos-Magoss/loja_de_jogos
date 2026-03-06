import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import CardCompras from '../Card_compras'
import Icones from '../../../styles/icones'

import { P } from '../../Paragrafo/Paragrafo'
import {
  CarrinhoHeader,
  CarrinhoProdutos,
  ButtonCarrinho,
  CarrinhoFooter
} from '../../../styles'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type Props = {
  viewShopping: boolean
}

const Carrinho = ({ viewShopping }: Props) => {
  const navigate = useNavigate()
  const [temProdutos, setTemProdutos] = useState(false)
  const itens = useSelector((state: RootState) => state.shoppingCart.itens)

  function subTotal(): number {
    return itens.reduce((total, item) => {
      //como eu não sei que tipos de dados a API irá retornar eu garanto que ele seja convertido em número como é o esperado
      const preco = Number(item.newPrice) || Number(item.price)
      // mas caso ele venha como null ele irá olhar para o preço normal, assim garantindo a integridade dos valores passados ao usuário
      return Math.ceil(total + preco)
    }, 0)
  }
  useEffect(() => {
    if (itens.length <= 0) {
      setTemProdutos(false)
    } else {
      setTemProdutos(true)
    }
  }, [itens])

  const quantidade = itens.length <= 0 ? '' : <>({itens.length})</>
  const Preco = subTotal()

  return (
    <S.CarrinhoContainer viewShopping={viewShopping}>
      <CarrinhoHeader>
        <S.CarrinhoLogo>
          {Icones.sacola}
          <P as="p" fontSize={16}>
            carrinho {quantidade}
          </P>
        </S.CarrinhoLogo>
        <div>{Icones.X}</div>
      </CarrinhoHeader>
      <CarrinhoProdutos temProdutos={temProdutos}>
        {itens.length <= 0 ? (
          <>
            <div>
              <div>{Icones.sacola}</div>
              <div>
                <P as="p" fontSize={16}>
                  Seu carrinho está vazio
                </P>
                <P as="p" fontSize={14}>
                  Adicione jogos incríveis à sua coleção!
                </P>
              </div>
            </div>
          </>
        ) : (
          <>
            {itens.map((j) => (
              <li>
                <CardCompras
                  key={j.id}
                  size="small"
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
          </>
        )}
      </CarrinhoProdutos>
      <CarrinhoFooter temProdutos={temProdutos}>
        <S.CarrinhoSubTotal>
          <P as="p" fontSize={16}>
            subtotal
          </P>
          <P as="p" fontSize={16}>
            R$ {Preco}
          </P>
        </S.CarrinhoSubTotal>
        <ButtonCarrinho
          title="Ir para a área de pagamento"
          action={() => navigate('/pay')}
        >
          <>
            {Icones.cartao}
            ir para o pagamento
          </>
        </ButtonCarrinho>
      </CarrinhoFooter>
    </S.CarrinhoContainer>
  )
}

export default Carrinho
