import { useGetGamesQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useEffect, useState } from 'react'

import * as enuns from '../../utils/enuns/categorias'

import Carrousel from '../../components/Loja/Carrousel'
import Categorias from '../../components/Loja/Categorias'
import ListaDeJogos from '../../components/Loja/Lista_de_jogos'

import { TextCharging } from './styles'
import Icones from '../../styles/icones'
import variaveis from '../../styles/variaveis'
import CardJogo from '../../components/Loja/Card_jogo'
import Game from '../../models/jogo'
import { alteraCategoria } from '../../store/reducers/filtro'
import { ButtonsCategoria } from '../../components/Loja/Categorias/style'
import Modal from '../../components/Loja/Modal'
import Favoritos from '../../components/Loja/Favoritos'

const ButtonsCategories = [
  enuns.Categoria.TODOS,
  enuns.Categoria.ACAO,
  enuns.Categoria.RPG,
  enuns.Categoria.CORRIDA,
  enuns.Categoria.TERROR,
  enuns.Categoria.ESPORTE,
  enuns.Categoria.AVENTURA
]

const Loja = () => {
  const dispatch = useDispatch()
  const [CurrentID, setCurrentID] = useState(1)

  const Buttons = ButtonsCategories.map((value, btn) => ({
    id: btn + 1,
    action() {
      dispatch(alteraCategoria(value))
      setCurrentID(this.id)
    },
    titleButton: value,
    titleDescription: `Categoria ${value}`
  }))

  const {
    data: jogos,
    isLoading: carregando,
    isError: erro
  } = useGetGamesQuery()

  const { categoria: filtro, termo } = useSelector(
    (state: RootState) => state.filtro
  )
  const [selectGames, setSelectGames] = useState<Game[]>([])

  useEffect(() => {
    const newGame = jogos?.filter((j) => j.tag === filtro)

    if (filtro === enuns.Categoria.TODOS) return
    setSelectGames(newGame as Game[])
  }, [filtro])

  useEffect(() => {
    if (filtro !== enuns.Categoria.TODOS && termo !== '') {
      const gameSearch = selectGames.filter((g) =>
        g.name.toLowerCase().includes(termo?.toLowerCase() as string)
      )
      setSelectGames(gameSearch)
    }

    if (filtro === enuns.Categoria.TODOS && termo !== '') {
      const gameSearch = jogos?.filter((j) =>
        j.name.toLowerCase().includes(termo?.toLowerCase() as string)
      )
      setSelectGames(gameSearch as Game[])
    }
  }, [termo])

  if (carregando) return <TextCharging>Por favor aguarde!</TextCharging>
  if (erro) return <h2>Ocorreu um erro, nos deculpe!</h2>
  if (!jogos) return <h3>Carregando</h3>
  if (!selectGames) return <h4>...</h4>

  const lancamentos = jogos.filter((game) => game.descontPrice <= 0)
  const promocoes = jogos.filter((game) => game.descontPrice > 0)

  return (
    <>
      <Carrousel />
      <Modal />
      <Categorias>
        {Buttons.map((btn) => (
          <ButtonsCategoria
            key={btn.id}
            title={btn.titleDescription}
            action={() => {
              btn.action()
            }}
            id={btn.id}
            active={CurrentID === btn.id}
          >
            {btn.titleButton}
          </ButtonsCategoria>
        ))}
      </Categorias>
      <Favoritos />
      {filtro === enuns.Categoria.TODOS && termo === '' ? (
        <>
          <ListaDeJogos
            title="Ofertas Especiais"
            colorIcon={variaveis.corTag}
            icon={Icones.fogo}
          >
            {promocoes.map((jogo) => (
              <li key={jogo.id}>
                <CardJogo game={jogo} itsInTheStore={true} />
              </li>
            ))}
          </ListaDeJogos>
          <ListaDeJogos
            title="Lançamentos"
            colorIcon={variaveis.corAzul}
            icon={Icones.relogio}
          >
            {lancamentos.map((jogo) => (
              <li key={jogo.id}>
                <CardJogo game={jogo} itsInTheStore={true} />
              </li>
            ))}
          </ListaDeJogos>
          <ListaDeJogos title="Todos os Jogos">
            {jogos.map((jogo) => (
              <li key={jogo.id}>
                <CardJogo game={jogo} itsInTheStore={true} />
              </li>
            ))}
          </ListaDeJogos>
        </>
      ) : (
        <>
          <ListaDeJogos title={`${filtro}`}>
            {selectGames.map((jogo) => (
              <li key={jogo.id}>
                <CardJogo game={jogo} itsInTheStore={true} />
              </li>
            ))}
          </ListaDeJogos>
        </>
      )}
    </>
  )
}

export default Loja
