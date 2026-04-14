import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import Game from '../../../models/jogo'

import CardJogo from '../Card_jogo'
import ListaDeJogos from '../Lista_de_jogos'
import Icones from '../../../styles/icones'
import * as S from './styles'

import { RootState } from '../../../store'
import { adicionaJogo } from '../../../store/reducers/favoritos'

const Favoritos = () => {
  const { item } = useSelector((state: RootState) => state.favorito)
  const dispatch = useDispatch()

  useEffect(() => {
    const key = 'localStorage_key'
    const dadosSalvos = JSON.parse(localStorage.getItem(key) || '[]') as Game[]

    dadosSalvos.forEach((dados) => dispatch(adicionaJogo(dados)))
  }, [])

  return (
    <>
      {item.length > 0 && (
        <S.ContainerFavoritos>
          <ListaDeJogos
            buttonView={true}
            title={`Meus Favoritos (${item.length})`}
            icon={Icones.coracaoVermelho}
            id="favoritos"
          >
            {item?.map((jogo) => (
              <li key={jogo.id}>
                <CardJogo game={jogo} itsInTheStore={true} />
              </li>
            ))}
          </ListaDeJogos>
        </S.ContainerFavoritos>
      )}
    </>
  )
}

export default Favoritos
