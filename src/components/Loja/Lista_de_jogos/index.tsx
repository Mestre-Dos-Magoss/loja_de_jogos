import Icones from '../../../styles/icones'
import Paragrafo from "../../Paragrafo"
import * as S from "./styles"

import CardJogo from "../Card_jogo"
import { Props } from '../../../containers/Loja/index'

const ListaDeJogos = ({ jogos }:Props) => {
    return (
        <S.ContainerCards>
            <div>
                <S.Secao>
                    <S.IconeLaranja>
                        {Icones.fogo}
                    </S.IconeLaranja>
                    <Paragrafo fontSize={16}>Ofertas Especiais</Paragrafo>
                </S.Secao>
                <S.ListContainer>
                    {jogos.map((jogo) => (
                        <li key={jogo.id}>
                            <CardJogo jogo={{
                                name: jogo.name,
                                description: jogo.description,
                                image: jogo.image,
                                avaliationGame: jogo.avaliationGame,
                                realeaseDate: jogo.realeaseDate,
                                developmente: jogo.developmente,
                                tag: jogo.tag,
                                price: jogo.price,
                                newPrice: jogo.newPrice,
                                descontPrice: jogo.descontPrice,
                                id: jogo.id
                            }} />
                        </li>
                    ))}
                </S.ListContainer>
            </div>
            <div>
                <S.Secao>
                    <S.IconeAzul>{Icones.relogio} </S.IconeAzul>
                    <Paragrafo fontSize={16} tipo="Secundario">Lançamentos</Paragrafo>
                </S.Secao>
                <S.ListContainer>
                    {jogos.map((jogo) => (
                        <li key={jogo.id}>
                            <CardJogo jogo={{
                                name: jogo.name,
                                description: jogo.description,
                                image: jogo.image,
                                avaliationGame: jogo.avaliationGame,
                                realeaseDate: jogo.realeaseDate,
                                developmente: jogo.developmente,
                                tag: jogo.tag,
                                price: jogo.price,
                                newPrice: jogo.newPrice,
                                descontPrice: jogo.descontPrice,
                                id: jogo.id
                            }} />
                        </li>
                    ))}
                </S.ListContainer>
            </div>
            <div>
                <S.Secao>
                    <Paragrafo fontSize={16} tipo="Secundario">Todos os Jogos</Paragrafo>
                </S.Secao>
                <S.ListContainer>
                    {jogos.map((jogo) => (
                        <li key={jogo.id}>
                            <CardJogo jogo={{
                                name: jogo.name,
                                description: jogo.description,
                                image: jogo.image,
                                avaliationGame: jogo.avaliationGame,
                                realeaseDate: jogo.realeaseDate,
                                developmente: jogo.developmente,
                                tag: jogo.tag,
                                price: jogo.price,
                                newPrice: jogo.newPrice,
                                descontPrice: jogo.descontPrice,
                                id: jogo.id
                            }} />
                        </li>
                    ))}
                </S.ListContainer>
                <S.ListContainer>
                    {jogos.map((jogo) => (
                        <li key={jogo.id}>
                            <CardJogo jogo={{
                                name: jogo.name,
                                description: jogo.description,
                                image: jogo.image,
                                avaliationGame: jogo.avaliationGame,
                                realeaseDate: jogo.realeaseDate,
                                developmente: jogo.developmente,
                                tag: jogo.tag,
                                price: jogo.price,
                                newPrice: jogo.newPrice,
                                descontPrice: jogo.descontPrice,
                                id: jogo.id
                            }} />
                        </li>
                    ))}
                </S.ListContainer>
            </div>
        </S.ContainerCards>
    )
}

export default ListaDeJogos