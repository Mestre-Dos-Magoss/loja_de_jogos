import styled from "styled-components";
import variaveis from "../../../styles/variaveis";

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
    border:2px solid #12294fff;
    border-radius:8px;
    margin:4px 0 16px 0;
    background-color: #130d1b83;
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

export const Button = styled.button`
  width:100%;
  padding:10px 16px;
  margin-bottom:28px;
  font-weight: bold;
  font-size: 14px;
  border-radius:8px;
  border:none;
  background-image:linear-gradient(266deg, ${variaveis.corDegrade1},${variaveis.corDegrade2});
  color:#fff;
  cursor:pointer;
`