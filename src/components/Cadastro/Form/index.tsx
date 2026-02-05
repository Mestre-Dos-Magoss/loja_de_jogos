import Icones from '../../../styles/icones'
import * as Ss from '../../Login/Form/form'
import * as S from './form'

const FormCadastro = () => (
    <div>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="">Nome Completo</Ss.Label>
            <Ss.Icones>
                {Icones.pessoa}
            </Ss.Icones>
            <Ss.Campo type="text" placeholder='Seu nome' />
        </Ss.CampoContainer>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="">E-mail</Ss.Label>
                <Ss.Icones>
                    {Icones.email}
                </Ss.Icones>
            <Ss.Campo type="email" placeholder="seu@email.com" required/>
        </Ss.CampoContainer>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="" >Senha</Ss.Label>
            <Ss.Icones>
                {Icones.cadeado}
            </Ss.Icones>
            <Ss.Campo type="Password" placeholder="........." required/>
        </Ss.CampoContainer>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="" >Senha</Ss.Label>
            <Ss.Icones>
                {Icones.cadeado}
            </Ss.Icones>
            <Ss.Campo type="Password" placeholder="........." required/>
        </Ss.CampoContainer>
        <Ss.FormCheckLabel>
            <Ss.CampoChecke type="checkbox" />
            <S.Label>Concordo com os <Ss.Link>Termos de Serviço</Ss.Link> e <Ss.Link>Política de Privacidade</Ss.Link></S.Label>
        </Ss.FormCheckLabel>
        <Ss.ButtonForm>Criar conta</Ss.ButtonForm>
    </div>
)

export default FormCadastro