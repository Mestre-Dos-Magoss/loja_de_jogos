import Carrousel from '../../components/Loja/Carrousel'
import Categorias from '../../components/Loja/Categorias'
import ListaDeJogos from '../../components/Loja/Lista_de_jogos'
import { useGetGamesQuery } from '../../services/index'
import Game from '../../models/jogo'

import { TextCharging } from './styles'
import Icones from '../../styles/icones'
import variaveis from '../../styles/variaveis'

const Loja = () => {
  const {
    data: jogos,
    isLoading: carregando,
    isError: erro
  } = useGetGamesQuery()
  if (carregando) return <TextCharging>Por favor aguarde!</TextCharging>
  if (erro) return <h1>Ocorreu um erro, nos deculpe!</h1>

  return (
    <>
      <Carrousel />
      <Categorias />
      <ListaDeJogos
        title="Ofertas Especiais"
        colorIcon={variaveis.corTag}
        icon={Icones.fogo}
        jogos={jogos as Game[]}
      />
      <ListaDeJogos
        title="Lançamentos"
        colorIcon={variaveis.corAzul}
        icon={Icones.relogio}
        jogos={jogos as Game[]}
      />
      <ListaDeJogos title="Todos os Jogos" jogos={jogos as Game[]} />
    </>
  )
}

export default Loja
