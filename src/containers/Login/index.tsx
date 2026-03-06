import Footer from '../../components/Login/Footer'
import Form from '../../components/Login/Form'
import Header from '../../components/Login/Header'
import { ContainerCadastro } from '../../styles'

import * as S from './login'

const Loginn = () => {
  return (
    <ContainerCadastro>
      <S.FormContainer>
        <Header
          titulo="Bem-vindo de volta"
          subTitulo="Entre com sua conta para continuar jogando"
        />
        <Form />
        <Footer link="/register" textLink="Cadastre-se" />
      </S.FormContainer>
    </ContainerCadastro>
  )
}

export default Loginn
