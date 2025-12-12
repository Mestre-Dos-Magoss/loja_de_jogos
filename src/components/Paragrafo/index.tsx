import * as S from './Paragrafo'
export type Props = {
    children:string;
    fontSize:number;
    marginBottom?: number;
    tipo: 'Principal' | 'Secundario';
}

const Paragrafo = ({ fontSize, tipo, children, marginBottom }:Props) => (
    <S.P tipo={tipo} fontSize={fontSize} marginBottom={marginBottom}>{children}</S.P>
)

export default Paragrafo;