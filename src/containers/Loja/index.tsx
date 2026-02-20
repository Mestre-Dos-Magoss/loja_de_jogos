import Carrousel from "../../components/Loja/Carrousel"
import Categorias from "../../components/Loja/Categorias"
import ListaDeJogos from "../../components/Loja/Lista_de_jogos"
import Game from '../../models/jogo'

import Icones from '../../styles/icones'
import variaveis from "../../styles/variaveis"

export type Props = {
  jogos: Game[]
}

const Loja = ({ jogos }: Props) =>  (
  <>
    <Carrousel />
    <Categorias />
    <ListaDeJogos title="Ofertas Especiais" colorIcon={variaveis.corTag} icon={Icones.fogo} jogos={jogos} />
    <ListaDeJogos title="Lançamentos" colorIcon={variaveis.corAzul} icon={Icones.relogio} jogos={jogos} />
    <ListaDeJogos title="Todos os Jogos" jogos={jogos} />
  </>
)

export default Loja