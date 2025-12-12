import Paragrafo from '../../Paragrafo'
import * as S from './footer'

type PropsLink = {
    link:string
    textLink:string
}

const Footer = ({ link, textLink }: PropsLink) => (
              <S.Footer >
                <S.ParagrafoFooter tipo='Secundario' marginBottom={16} fontSize={12}>Ou continue com</S.ParagrafoFooter>
                <S.Redes className="redes">
                    <div>
                        <S.Button>G  Google</S.Button>
                    </div> 
                    <div>
                        <S.Button>F  Facebook</S.Button>
                    </div>
                </S.Redes>
                <S.ContainerText>
                    <Paragrafo tipo='Secundario' fontSize={14}>Não tem uma conta?  </Paragrafo>
                    <S.Link href={link}>{ textLink}</S.Link>
                </S.ContainerText>
            </S.Footer>
)

export default Footer 