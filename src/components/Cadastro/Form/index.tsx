import * as Ss from '../../Login/Form/form'
import * as S from './form'

const FormCadastro = () => (
    <div>
        <div>
            <Ss.Label htmlFor="">Nome Completo</Ss.Label>
            <Ss.Campo type="text" placeholder='Seu nome' />
        </div>
        <div>
            <Ss.Label htmlFor="">E-mail</Ss.Label>
            <Ss.Campo type="email" placeholder='Seu@email.com'/>
        </div>
        <div>
            <Ss.Label htmlFor="">Senha</Ss.Label>
            <Ss.Campo type="password" placeholder='........' />
        </div>
        <div>
            <Ss.Label htmlFor="">Confirmar senha</Ss.Label>
            <Ss.Campo type="password" placeholder='........' />
        </div>
        <Ss.FormCheckLabel>
            <Ss.CampoChecke type="checkbox" />
            <S.Label>Concordo com os <Ss.Link>Termos de Serviço</Ss.Link> e <Ss.Link>Política de Privacidade</Ss.Link></S.Label>
        </Ss.FormCheckLabel>
        <Ss.Button>Criar conta</Ss.Button>
    </div>
)

export default FormCadastro