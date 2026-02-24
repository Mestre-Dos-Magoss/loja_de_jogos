import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes';
import store from './store/index'
import Game from './models/jogo';

import EstiloGlobal from './styles';

function App() {
  const [jogo, setJogo ] = useState<Game[]>([])

  useEffect(() => {
    async function carregarDados(){
      try {
       await fetch('https://file-games.vercel.app/api/games').then((res) =>{
          return res.json()
        }).then((game) => {
          return setJogo(game)
        })
      }
      catch(erro) {
        console.error(`Error message the store: ${erro}`)
        alert(`Ocorreu algum erro na página, tente recarregalá ou tente novamente mais tarde`)
    }
  }
  carregarDados()
  },[jogo])

  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Provider store={store}>
        <AppRoutes jogo={jogo} />
      </Provider>
    </BrowserRouter>
  );
}

export default App; 