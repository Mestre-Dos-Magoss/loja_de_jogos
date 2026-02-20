import FormCadastro from "../../components/Cadastro/Form"
import Footer from "../../components/Login/Footer"
import Header from "../../components/Login/Header"
import { ContainerCadastro } from "../../styles"
import { FormContainer } from "../Login/login"

const cadastro  = () => (
    <ContainerCadastro>
        <FormContainer>
            <Header
            titulo="Criar conta"
            subTitulo="Crie sua conta e comece sua jornada"
            />
            <FormCadastro />
            <Footer link="/login" textLink="Faça login"/>
        </FormContainer>
    </ContainerCadastro>
)

export default cadastro