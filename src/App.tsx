import React from 'react';
import EstiloGlobal from './styles';
import Loginn from './containers/Login';
import Cadastro from './containers/Cadastro';
import Loja from './containers/Loja';

export type Game = {
  name: string
  description: string
  image: string
  avaliationGame: number
  realeaseDate: string
  developmente: string
  tag: string[]
  price: number
  newPrice: number
  descontPrice: number
  id: number
}

function App() {
  return (
    <>
      <EstiloGlobal />
        {/* <Cadastro /> */}
        {/* <Loginn /> */}
        <Loja />
    </>
  );
}

export default App; 
