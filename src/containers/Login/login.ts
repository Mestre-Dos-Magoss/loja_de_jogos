import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const FormContainer = styled.div`
  max-width:448px;
  width:100%;
  padding:24px;
  margin:0 auto;
  border-radius:15px;
  background-color: ${variaveis.corFundo};

    @media (max-width:768px) {
      max-width:90%;
  }
`