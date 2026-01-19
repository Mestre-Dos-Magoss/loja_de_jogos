import React, { useState } from 'react';
import EstiloGlobal from './styles';
import Loginn from './containers/Login';
import Cadastro from './containers/Cadastro';
import Loja from './containers/Loja';
import PopUps from './components/Loja/Pop-ups';
import Carrinho from './components/Loja/Carrinho';

export type Game = {
  name: string
  description: string
  image: string
  avaliationGame: number
  realeaseDate: string
  developmente: string
  tag: string
  price: number
  newPrice: number
  descontPrice: number
  id: number
}

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
        <Carrinho />
    </>
  );
}

export default App; 
