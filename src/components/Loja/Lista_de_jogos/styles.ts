import styled from 'styled-components'
import { Container } from '../../../styles/index'
import variaveis from '../../../styles/variaveis'
import { Props } from '.'
import Button from '../../Buttons'
import { Botao } from '../../Buttons/styles'

type ViewButton = {
  isOpen?: boolean
  buttonView: boolean
}

export const Secao = styled.div`
  display: flex;
  align-items: center;

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

export const ListContainer = styled.ul<Omit<ViewButton, 'buttonView'>>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  gap: 1em;
  flex-wrap: wrap;
`

export const ContainerCards = styled(Container)`
  display: block;
  margin: 0 auto;
`

export const ButtonDefault = styled(Button)`
  width: 80px;
  background-color: ${variaveis.corTextoSecundaria};
  color: ${variaveis.corFundo};
  font-weight: normal;
  padding: 6px 4px;
  border-radius: 8px;
`

export const HeaderSection = styled.div<ViewButton>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  ${Botao} {
    display: ${(props) => (props.buttonView ? 'block' : 'none')};
  }
`
