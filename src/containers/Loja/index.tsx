import Carrousel from "../../components/Loja/Carrousel"
import Categorias from "../../components/Loja/Categorias"
import HeaderLoja from "../../components/Loja/Header"
import ListaDeJogos from "../../components/Loja/Lista_de_jogos"
import { Game } from '../../App'
import Footer from "../../components/Loja/Footer"

export type Props = {
  jogos: Game[]
}

const Loja = ({ jogos }: Props) =>  (
  <>
    <HeaderLoja />
    <Carrousel />
    <Categorias />
    <ListaDeJogos jogos={jogos} />
    <Footer />
  </>
)

export default Loja