import { useDispatch, useSelector } from 'react-redux'

import Game from '../models/jogo'

import { adicionaJogo, removeJogo } from '../store/reducers/favoritos'
import { RootState } from '../store'

const useFavorites = () => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.favorito.item)

  function favoritarGame({
    avaliationGame,
    descontPrice,
    description,
    developmente,
    id,
    image,
    name,
    newPrice,
    price,
    realeaseDate,
    tag
  }: Game) {
    const key = 'localStorage_key'
    const GameObject = {
      id,
      name,
      image,
      price,
      newPrice,
      avaliationGame,
      descontPrice,
      description,
      developmente,
      realeaseDate,
      tag
    }

    const favoritos = JSON.parse(localStorage.getItem(key) || '[]') as Game[]
    const verificaExistenciaFavoritos = favoritos.find(
      (f: Game) => f.id === GameObject.id
    )

    if (!verificaExistenciaFavoritos) {
      const novosFavoritos = [...favoritos, GameObject]
      localStorage.setItem(key, JSON.stringify(novosFavoritos))

      novosFavoritos.forEach((jogo) => dispatch(adicionaJogo(jogo)))
    } else {
      const removeItem = favoritos.filter((item) => item.id !== GameObject.id)
      const favoritoAtual = [...removeItem]

      localStorage.setItem(key, JSON.stringify(favoritoAtual))
      dispatch(removeJogo(GameObject))
    }
  }

  function getIdFavoriteItem(id: number) {
    const verifyItens = itens.find((gameFav) => gameFav.id === id)
    return verifyItens
  }

  return { favoritarGame, getIdFavoriteItem }
}

export default useFavorites
