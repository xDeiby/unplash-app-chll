import styled from "styled-components";
import RegisterForm from "../components/auth/register/RegisterForm";

const RegisterPageContainer = styled.div`
  margin-top: 40px;
`;

export default function RegisterPage() {
  return (
    <RegisterPageContainer>
      <RegisterForm />
    </RegisterPageContainer>
  );
}
