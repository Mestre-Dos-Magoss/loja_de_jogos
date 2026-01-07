import * as S from './form'

const Form = () => {
  return ( 
    <div>
        <S.CampoContainer>
            <S.Label htmlFor="">E-mail</S.Label>
                <S.Icones xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </S.Icones>
            <S.Campo type="email" placeholder="      seu@email.com" required/>
        </S.CampoContainer>
        <S.CampoContainer>
            <S.Label htmlFor="" >Senha</S.Label>
            <S.Icones xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </S.Icones>
            <S.Campo type="Password" placeholder="      ........." required/>
        </S.CampoContainer>
        <div>
            <S.FormCheckLabel>
                <div>
                    <S.CampoChecke type="text" />
                    <S.Label htmlFor="">Lembrar-me</S.Label>
                </div> 
                <S.Link>Esqueceu a senha? </S.Link>
            </S.FormCheckLabel>
        </div>
            <S.ButtonForm>Entrar</S.ButtonForm>
        </div>
    )
}

export default Form