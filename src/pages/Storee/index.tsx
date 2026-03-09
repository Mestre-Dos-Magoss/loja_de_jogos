import Carrinho from '../../components/Loja/Carrinho'
import PopUps from '../../components/Loja/Pop-ups'
import Loja from '../../containers/Loja'

const Store = () => (
  <>
    <Loja />
    <PopUps viewPopUp={false} />
    <Carrinho />
  </>
)

export default Store
