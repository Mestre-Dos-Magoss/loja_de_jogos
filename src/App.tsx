import React, { useState } from 'react';
import EstiloGlobal, { Container } from './styles';
import Loginn from './containers/Login';
import Cadastro from './containers/Cadastro';
import Loja from './containers/Loja';
import PopUps from './components/Loja/Pop-ups';
import Carrinho from './components/Loja/Carrinho';
import AreaPagamento from './containers/AreaPagamento';
import Bibilioteca from './containers/Biblioteca';

function App() {

  // const [jogo, setJogos ] = useState([])

  // fetch('http://localhost:4000/Jogos').
  //   then((res) =>{
  //     return res.json()
  //   }).
  //   then((game) => {
  //     return setJogos(game)
  //   })

  return (
    <>
      <EstiloGlobal />
        {/* <Cadastro /> */}
        {/* <Loginn /> */}
        {/* { <Loja jogos={jogo} /> } */}
        {/* <PopUps /> */}
        {/* <Carrinho /> */}
        {/* <AreaPagamento /> */}
          <Bibilioteca />
    </>
  );
}

export default App; 
