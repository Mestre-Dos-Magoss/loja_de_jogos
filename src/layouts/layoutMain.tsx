import { Outlet } from 'react-router-dom'
import HeaderLoja from '../components/Loja/Header'
import Footer from '../components/Loja/Footer'

const LayoutMain = () => {
  return (
    <>
      <HeaderLoja />
      <Outlet />
      <Footer />
    </>
  )
}
export default LayoutMain
