import Carrinho from "../../components/Loja/Carrinho"
import PopUps from "../../components/Loja/Pop-ups"
import Loja from "../../containers/Loja"
import Game from "../../models/jogo"

type Props = {
    jogo: Game[],
}

const Store = ({ jogo}:Props) => (
  <>
    <Loja jogos={jogo} />
    <PopUps viewPopUp={false} />
    <Carrinho viewShopping={true}/>
  </>
)

export default Store