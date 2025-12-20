import Paragrafo from '../../Paragrafo'
import * as S from './styles'

import { Props } from '../Header'

const Carrousel = ({ Active }: Props) => {
    
  return (
    <S.Carrousel>
      <S.ArrowsContainer>
        <S.Arrow>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>
        </S.Arrow>
        <S.Arrow>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
        </S.Arrow>
      </S.ArrowsContainer>
      <S.ContadoresContainer>
        <S.Contador Active={false}></S.Contador>
        <S.Contador Active={true}></S.Contador>
        <S.Contador Active={false}></S.Contador>
      </S.ContadoresContainer>
        <S.CarrouselDescription>
          <S.TagDesconto>
            -30% OFF
          </S.TagDesconto>
          <S.CarrouselTitle>Cyber Legends: Neon City</S.CarrouselTitle>
          <Paragrafo marginBottom={16} fontSize={16} tipo='Secundario'>Mergulhe em uma metrópole cyberpunk futurista repleta de aventuras e perigos. Escolha seu caminho em um mundo de tecnologia e conspiração.</Paragrafo>
          <S.Avaliations>
            <S.Avaliation>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
              4.5
            </S.Avaliation>
            <S.Categoria>
              Corrida
            </S.Categoria>
          </S.Avaliations>
          <S.OptionsContainer>
            <S.PriceAntigo>R$ 39.99</S.PriceAntigo>
            <S.PriceNovo>R$ 39.99</S.PriceNovo>
          </S.OptionsContainer>
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