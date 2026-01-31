import { SVGProps } from 'react'
import * as enums from '../../../utils/enuns/formasDePagamento'

import * as S from './styles'
type Props = {
    svg: SVGProps<SVGSVGElement>,
    tipoPagamento: enums.FormasDePagamento.CARTAO | enums.FormasDePagamento.PIX | enums.FormasDePagamento.BOLETO,
    ativo: boolean,
    onSelect: () => void
}
const OpcoesPagamento = ({ svg, tipoPagamento, ativo, onSelect }: Props) => {

  return (
    <S.OpcaoDePagamanto $pagamento={ativo} onClick={onSelect}>
      <>
        {svg} 
      </>
      <span>{tipoPagamento}</span> 
    </S.OpcaoDePagamanto>
  )
}

export default OpcoesPagamento