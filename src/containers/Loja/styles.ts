import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const TextCharging = styled.h1`
  display: block;
  margin-bottom: 1em;
  background-image: linear-gradient(
    220deg,
    ${variaveis.corAzul},
    ${variaveis.corBotao}
  );
  background-clip: text;
  color: transparent;
`
