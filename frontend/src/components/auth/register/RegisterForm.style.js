import styled from "styled-components";
import { ButtonStyle } from "../../shared/button/Button.style";

export const FormContainer = styled.div`
  width: min(600px, 100%);
  padding: 40px 30px;
  border-radius: 24px;
  /* border: 1px solid #3db46d; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const FormTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: #4f4f4f;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const LoginButton = styled(ButtonStyle)`
  background: #4f4f4f;
  color: white;
`;
