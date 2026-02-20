import Bibilioteca from "../../containers/Biblioteca"
import Game from "../../models/jogo"

type Props = {
  jogo: Game[]
}

const Library = ({jogo}: Props) =>(
  <Bibilioteca jogo={jogo}/>
)


export default Library