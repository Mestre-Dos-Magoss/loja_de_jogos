import Footer from "../../components/Login/Footer"
import Form from "../../components/Login/Form"
import Header from "../../components/Login/Header"

import * as S from './login'

const Loginn = () => {  
    return(
        <S.FormContainer>
            <Header
            titulo="Bem-vindo de volta"
            subTitulo="Entre com sua conta para continuar jogando"
            />
            <Form />
            <Footer link="#link" textLink="Cadastre-se"/>
        </S.FormContainer>
    )
}

export default Loginn