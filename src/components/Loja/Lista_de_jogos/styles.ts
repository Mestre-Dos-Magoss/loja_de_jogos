import styled from 'styled-components'
import { Container } from '../../../styles/index'
import variaveis from '../../../styles/variaveis'
import { Props } from '.'

export const Secao = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  svg {
  }
  p {
    color: ${variaveis.corFundo};
    margin-left: 8px;
  }
`
export const ColorIcon = styled.svg<Omit<Props, 'jogos' | 'title' | 'icon'>>`
  width: 24px;
  height: 30px;
  color: ${(props) => props.colorIcon};
`

export const ListContainer = styled.ul`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`

export const ContainerCards = styled(Container)`
  display: block;
  margin: 0 auto;
`
