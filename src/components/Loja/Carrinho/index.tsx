import Icones from '../../../styles/icones'
import { P } from "../../Paragrafo/Paragrafo"
import { CarrinhoHeader, CarrinhoProdutos, ButtonCarrinho, CarrinhoFooter, InfosGame, PriceAntigoo, PriceNovo } from '../../../styles'
import * as S from './styles'

const Carrinho = () => (
    <S.CarrinhoContainer>
        <CarrinhoHeader>
            <S.CarrinhoLogo>
                {Icones.sacola}
                <P as="p" fontSize={16} >carrinho (4)</P>
            </S.CarrinhoLogo>
            <div>
                {Icones.X}
            </div>
        </CarrinhoHeader>
        <CarrinhoProdutos temProdutos>
            {/* <div>
                <div>
                    {Icones.sacola}
                </div>
                <div>
                    <P as="p" fontSize={16} >Seu carrinho está vazio</P>
                    <P as="p" fontSize={14} >Adicione jogos incríveis à sua coleção!</P>
                </div>
            </div> */}
            {/* //esta área terá uma futura alteração e passará a entegrar um outro componente e não estará mais assim */}
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
                        {Icones.lixeira}
                    </S.ExcluirGame>
            </S.CarrinhoComProduto>
        </CarrinhoProdutos>
        <CarrinhoFooter temProdutos>
            <S.CarrinhoSubTotal>
                <P as="p" fontSize={16} >subtotal</P>
                <P as="p" fontSize={16} >R$ 100.00</P>
            </S.CarrinhoSubTotal>
            <ButtonCarrinho>
                {Icones.cartao}
                ir para o pagamento
            </ButtonCarrinho>
        </CarrinhoFooter>
    </S.CarrinhoContainer>
)

export default Carrinho