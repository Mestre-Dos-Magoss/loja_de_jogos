import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import store from './store/index'

import EstiloGlobal from './styles'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  )
}

export default App
