import Icones from '../../../styles/icones'
import * as S from './form'

const Form = () => {
  return ( 
    <div>
        <S.CampoContainer>
            <S.Label htmlFor="">E-mail</S.Label>
                <S.Icones>
                    {Icones.email}
                </S.Icones>
            <S.Campo type="email" placeholder="seu@email.com" required/>
        </S.CampoContainer>
        <S.CampoContainer>
            <S.Label htmlFor="" >Senha</S.Label>
            <S.Icones>
                {Icones.cadeado}
           </S.Icones>
            <S.Campo type="Password" placeholder="........." required/>
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