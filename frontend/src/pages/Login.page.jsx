import styled from "styled-components";
import LoginForm from "../components/auth/login/LoginForm";

const LoginPageContainer = styled.div`
  margin-top: 70px;
`;

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
}
