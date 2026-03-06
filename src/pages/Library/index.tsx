import Bibilioteca from '../../containers/Biblioteca'
import Game from '../../models/jogo'
import { useGetGamesQuery } from '../../services/index'

const Library = () => {
  const { data: jogo, isLoading: carregando } = useGetGamesQuery()
  if (carregando) return <h1>Carregando...</h1>

  return <Bibilioteca jogo={jogo as Game[]} />
}

export default Library
