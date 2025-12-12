import FormCadastro from "../../components/Cadastro/Form"
import Footer from "../../components/Login/Footer"
import Header from "../../components/Login/Header"
import { FormContainer } from "../Login/login"

const cadastro  = () => (
    <FormContainer>
        <Header
         titulo="Criar conta"
         subTitulo="Crie sua conta e comece sua jornada"
         />
         <FormCadastro />
         <Footer link="#link2" textLink="Faça login"/>
    </FormContainer>
)

export default cadastro