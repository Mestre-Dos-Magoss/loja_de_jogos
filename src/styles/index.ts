import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  padding: 0%;
  margin:0;
  box-sizing: border-box;
  font-family: sans-serif;
  text-decoration: none;
}

body{
  position:relative;
  width:100%;
  min-height: 100vh;
  background-image:url('https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80');
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 24px;

}
body::before{
  content:"";
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  width:100%;
  min-height:100vh;
  opacity:0.90;
  z-index: -1;
  background-image: radial-gradient(100% 94%, black, #1d0050);
}
`
export default EstiloGlobal