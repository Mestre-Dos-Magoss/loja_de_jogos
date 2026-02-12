import React, { useEffect, useState } from 'react';
import EstiloGlobal, { Container } from './styles';
import Loginn from './containers/Login';
import Cadastro from './containers/Cadastro';
import Loja from './containers/Loja';
import PopUps from './components/Loja/Pop-ups';
import Carrinho from './components/Loja/Carrinho';
import AreaPagamento from './containers/AreaPagamento';
import Bibilioteca from './containers/Biblioteca';
import Game from './models/jogo';

function App() {

  const [jogo, setJogo ] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://file-games.vercel.app/api/games').
      then((res) =>{
        return res.json()
      }).
      then((game) => {
        return setJogo(game)
      })
  },[jogo])

  return (
    <>
      <EstiloGlobal />
        {/* <Cadastro /> */}
        {/* <Loginn /> */}
        { <Loja jogos={jogo} /> }
        {/* <PopUps /> */}
        {/* <Carrinho /> */}
        {/* <AreaPagamento /> */}
          {/* <Bibilioteca /> */}
    </>
  );
}

export default App; 