import Icones from '../../../styles/icones'
import Paragrafo from '../../Paragrafo'
import * as S from './styles'
import { TagDesconto, Categoria, Avaliation, PriceNovo, PriceAntigo, Avaliations, ContainerPrices} from '../../../styles/index'

import { Props } from '../Header'

const Carrousel = ({ Active }: Props) => {
    
  return (
    <S.Carrousel>
      <S.ArrowsContainer>
        <S.Arrow>
          {Icones.setaDireita}
        </S.Arrow>
        <S.Arrow>
          {Icones.setaEsquerda}
        </S.Arrow>
      </S.ArrowsContainer>
      <S.ContadoresContainer>
        <S.Contador Active={false}></S.Contador>
        <S.Contador Active={true}></S.Contador>
        <S.Contador Active={false}></S.Contador>
      </S.ContadoresContainer>
        <S.CarrouselDescription>
          <TagDesconto>
            -30% OFF
          </TagDesconto>
          <S.CarrouselTitle>Cyber Legends: Neon City</S.CarrouselTitle>
          <Paragrafo marginBottom={16} fontSize={16} tipo='Secundario'>Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.</Paragrafo>
          <Avaliations>
            <Avaliation>
              {Icones.estrela}
              4.5
            </Avaliation>
            <Categoria>
              Corrida
            </Categoria>
          </Avaliations>
          <ContainerPrices>
            <PriceAntigo>R$ 39.99</PriceAntigo>
            <PriceNovo>R$ 39.99</PriceNovo>
          </ContainerPrices>
          <S.ButtonsContainer>
            <S.Button1>Ver detalhes</S.Button1>
            <S.Button2>Adicionar ao Carrinho</S.Button2>
          </S.ButtonsContainer>
        </S.CarrouselDescription>
            <S.CarrouselImg src="https://images.unsplash.com/photo-1763402887477-d8815a20767c?w=800&q=80" alt="" />
    </S.Carrousel>
  )
}

export default Carrousel