import Bibilioteca from '../../containers/Biblioteca'
import Game from '../../models/jogo'
import { useGetGamesQuery } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Library = () => {
  const { item } = useSelector((state: RootState) => state.favorito) // using favoritoState just now

  // const { data: jogo, isLoading: carregando } = useGetGamesQuery()
  // if (carregando) return <h1>Carregando...</h1>

  return <Bibilioteca jogo={item} />
}

export default Library
