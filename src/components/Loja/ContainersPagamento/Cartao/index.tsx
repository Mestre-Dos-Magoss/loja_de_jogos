import Icones from '../../../../styles/icones'
import { Campo, CampoContainer, PagamentoHeaderItemVariante } from "../../../../styles"
import * as S from './styles'

const ContainerCartao = () => {
  return (
    <>
      <PagamentoHeaderItemVariante>
        {Icones.cartao}
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
                    {Icones.calendario}
                    validade
                </S.Label>
                <Campo type="date" id="" />
            </div>
            <div>
                <Campo type="date" id="" />
            </div>
            <div>
                <S.Label htmlFor="">
                    {Icones.cadeado}
                    CVV
                </S.Label>
                <Campo type="number" placeholder="123" id="" />
            </div>
        </S.InfosDoCartao> 
    </>
  )
}

export default ContainerCartao