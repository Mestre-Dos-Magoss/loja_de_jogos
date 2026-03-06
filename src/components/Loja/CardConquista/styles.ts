import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'

type Props = {
  color: string
}

export const Card = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  min-width: 406px;
  width: 100%;
  height: 98px;
  padding: 24px;
  column-gap: 1em;
  border-radius: 16px;
  border: 1px solid ${variaveis.corTextoSecundaria};
  background-color: ${variaveis.corCard};
`

export const Text = styled.div`
  display: block;
  width: 100%;
  text-transform: capitalize;
`

export const Img = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ color }) => `${color}30`};
  color: ${(props) => props.color};
`
