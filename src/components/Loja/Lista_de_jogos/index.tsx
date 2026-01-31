import Paragrafo from "../../Paragrafo"
import CardJogo from "../Card_jogo"
import * as S from "./styles"

import { Props } from '../../../containers/Loja/index'

const ListaDeJogos = ({ jogos }:Props) => {
    return (
        <S.ContainerCards>
            <div>
                <S.Secao>
                    <S.iconeLaranja xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-flame w-5 h-5 text-orange-500" data-fg-b7rw50="0.8:49.89:/App.tsx:254:19:9984:45:e:Flame::::::DFTU"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></S.iconeLaranja>
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
                    <S.iconeAzul xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-5 h-5 text-blue-500" data-fg-b7rw60="0.8:49.89:/App.tsx:276:19:10892:43:e:Clock::::::EGaB"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></S.iconeAzul>
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