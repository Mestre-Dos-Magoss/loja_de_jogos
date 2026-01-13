import * as Ss from '../../Login/Form/form'
import * as S from './form'

const FormCadastro = () => (
    <div>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="">Nome Completo</Ss.Label>
            <Ss.Icones xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </Ss.Icones>
            <Ss.Campo type="text" placeholder='Seu nome' />
        </Ss.CampoContainer>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="">E-mail</Ss.Label>
                <Ss.Icones xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </Ss.Icones>
            <Ss.Campo type="email" placeholder="seu@email.com" required/>
        </Ss.CampoContainer>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="" >Senha</Ss.Label>
            <Ss.Icones
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" data-fg-bi6b28="21.7:21.10427:/components/Login.tsx:130:15:4976:84:e:Lock::::::BF49"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </Ss.Icones>
            <Ss.Campo type="Password" placeholder="........." required/>
        </Ss.CampoContainer>
        <Ss.CampoContainer>
            <Ss.Label htmlFor="" >Senha</Ss.Label>
            <Ss.Icones 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" data-fg-bi6b28="21.7:21.10427:/components/Login.tsx:130:15:4976:84:e:Lock::::::BF49"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
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