import { InfosGame, PriceAntigoo, PriceNovo } from '../../../styles'
import { P } from '../../Paragrafo/Paragrafo'
import * as S from './styles'

const CardCompras = () => { // receberei as informações do produto e passarei por suas props
  return (
    <S.Produto>
        <div>
            <img src="https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f " alt="" />
        </div>
        <InfosGame>
            <div>
                <P as="h6" fontSize={32}>The Witcher 3: Wild Hunt</P>
                <P as="p" fontSize={24}>RPG</P>
            </div>
            <S.description>
                <P as="p" fontSize={18}>
                    Você é Geralt de Rívia, mercenário matador de monstros. Você está em um continente devastado pela guerra e infestado de monstros para você explorar à vontade. Sua tarefa é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo.
                </P>
            </S.description>
            <S.Price>
                <PriceAntigoo>
                    25.99
                </PriceAntigoo>
                <PriceNovo>
                    19.99
                </PriceNovo>
            </S.Price>
        </InfosGame>
            <S.ExcluirProduto>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2 lucide-trash-2 w-4 h-4" data-fg-cuyl49="21.32:35.1540:/components/CartDrawer.tsx:128:27:5273:30:e:Trash2::::::CuIQ"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
            </S.ExcluirProduto>
    </S.Produto>
  )
}

export default CardCompras