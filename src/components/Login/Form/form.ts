import styled from "styled-components";
import variaveis from "../../../styles/variaveis";
import { Button } from "../../Buttons/styles";

export const Label = styled.label`
    font-size: 14px;
    color:${variaveis.corPrincipal};
    font-weight: 600;
`
export const Link = styled.a`
  color:${variaveis.corLink};
  font-size: 14px;
  cursor:pointer;
`
export const Campo = styled.input`
  display:block;
  width:100%;
  padding:10px 16px;
  padding-left: 40px;
  border:2px solid #12294fff;
  border-radius:8px;
  margin:4px 0 16px 0;
  background-color: #130d1b83;
  color: ${variaveis.corPrincipal};
`
export const CampoChecke = styled.input`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  cursor:pointer;
`
export const FormCheckLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Icones = styled.svg`
  position: absolute;
  width: 24px;
  height: 22px;
  color: #b2b1b0ff;
  left: 12px;
  bottom: 9px;
  color:${variaveis.corTextoSecundaria};
`

export const CampoContainer = styled.div`
  position: relative;
`
export const ButtonForm = styled(Button)`
  margin-bottom:28px;
  background-image:linear-gradient(266deg, ${variaveis.corDegrade1},${variaveis.corDegrade2});
`