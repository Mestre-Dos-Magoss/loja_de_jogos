import { RxEnvelopeClosed } from "react-icons/rx";
import * as S from './form'
import { JSX } from "react/jsx-runtime";


const Form = (): JSX.Element => {
  return ( 
    // <RxEnvelopeClosed />
    <div>
        <div>
            <S.Label htmlFor="">E-mail</S.Label>
                {/* <RxEnvelopeClosed /> */}
            <S.Campo type="email" placeholder="seu@email.com"/>
        </div>
        <div>
            <S.Label htmlFor="">Senha</S.Label>
            <S.Campo type="Password" placeholder="........." />
        </div>
        <div>
            <S.FormCheckLabel>
                <div>
                    <S.CampoChecke type="text" />
                    <S.Label htmlFor="">Lembrar-me</S.Label>
                </div> 
                <S.Link>Esqueceu a senha? </S.Link>
            </S.FormCheckLabel>
        </div>
            <S.Button>Entrar</S.Button>
        </div>
    )
}

export default Form