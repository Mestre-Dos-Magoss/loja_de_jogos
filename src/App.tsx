import React from 'react';
import EstiloGlobal from './styles';
import Loginn from './containers/Login';
import Cadastro from './containers/Cadastro';
import Loja from './containers/Loja';

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
