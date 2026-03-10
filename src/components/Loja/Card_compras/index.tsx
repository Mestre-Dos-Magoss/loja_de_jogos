import { useDispatch } from 'react-redux'
import { remove } from '../../../store/reducers/shoppingCart'
import { FormatPrice } from '../../../utils/formatPrices'

import { InfosGame, PriceAntigoo, PriceNovo } from '../../../styles'
import { P } from '../../Paragrafo/Paragrafo'
import Icones from '../../../styles/icones'
import * as S from './styles'

type Props = {
  size: 'small' | 'big'
  image: string
  name: string
  tag: string
  price: number
  newPrice: number
  id: number
  description: string
}

const CardCompras = ({
  size,
  description,
  id,
  image,
  name,
  newPrice,
  price,
  tag
}: Props) => {
  // receberei as informações do produto e passarei por suas props
  const dispatch = useDispatch()

  const shortenDescription = (descricao: string): string => {
    if (description) {
      const limitedDescription = descricao.slice(0, 200) + '...'
      return limitedDescription
    }
    return '...'
  }

  return (
    <S.Produto size={size}>
      <div>
        <img src={image} alt="" />
      </div>
      <InfosGame>
        <div>
          <h5>{name}</h5>
          <p>{tag}</p>
        </div>
        <S.description size={size}>
          <P as="p" fontSize={18}>
            {shortenDescription(description)}
          </P>
        </S.description>
        <S.Price size={size}>
          <PriceAntigoo>{FormatPrice(price)}</PriceAntigoo>
          <PriceNovo>{FormatPrice(newPrice)}</PriceNovo>
        </S.Price>
      </InfosGame>
      <S.ExcluirProduto
        action={() => dispatch(remove({ id }))}
        title="Excluir item"
        size={size}
      >
        {Icones.lixeira}
      </S.ExcluirProduto>
    </S.Produto>
  )
}

export default CardCompras
