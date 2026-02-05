import Icones from '../../../styles/icones'
import { ImgContainer } from '../../../styles'
import Paragrafo from '../../Paragrafo'
import { Header as Cabecalho } from './header'

type PropsText ={
    titulo: string
    subTitulo: string
}

const Header = ({ titulo , subTitulo }: PropsText) => (
    <Cabecalho>
        <ImgContainer>
        {Icones.controle}
        </ImgContainer>
        <Paragrafo marginBottom={12} tipo='Principal' fontSize={16}>{titulo}</Paragrafo>
        <Paragrafo  tipo='Secundario' fontSize={16}>{subTitulo}</Paragrafo>
    </Cabecalho>
)

export default Header