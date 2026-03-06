import { Route, Routes } from 'react-router-dom'
import LayoutMain from './layouts/layoutMain'
import LayoutAuth from './layouts/layoutAuth'
import Storee from './pages/Storee'
import Library from './pages/Library'
import AreaPagamento from './containers/AreaPagamento'
import Loginn from './containers/Login'
import Cadastro from './containers/Cadastro'

const AppRoutes = () => (
  <Routes>
    <Route element={<LayoutAuth />}>
      <Route path="/login" element={<Loginn />} />
      <Route path="/register" element={<Cadastro />} />
    </Route>
    <Route element={<LayoutMain />}>
      <Route path="/" element={<Storee />} />
      <Route path="/library" element={<Library />} />
    </Route>
    <Route>
      <Route path="/pay" element={<AreaPagamento />} />
    </Route>
  </Routes>
)

export default AppRoutes
