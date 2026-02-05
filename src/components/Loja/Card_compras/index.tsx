import { InfosGame, PriceAntigoo, PriceNovo } from '../../../styles'
import { P } from '../../Paragrafo/Paragrafo'
import Icones from '../../../styles/icones'
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
                {Icones.lixeira}
            </S.ExcluirProduto>
    </S.Produto>
  )
}

export default CardCompras