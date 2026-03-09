import { Outlet } from 'react-router-dom'
import HeaderLoja from '../components/Loja/Header'
import Footer from '../components/Loja/Footer'
import { CartProvider } from '../utils/enuns/contexts/carrinho'

const LayoutMain = () => {
  return (
    <CartProvider>
      <HeaderLoja />
      <Outlet />
      <Footer />
    </CartProvider>
  )
}
export default LayoutMain
