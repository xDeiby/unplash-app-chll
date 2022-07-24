import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { loginSchema } from "../../schemas";
import { AuthService } from "../../../services";
import {
  ButtonGroup,
  FormContainer,
  FormLogin,
  FormTitle,
  RegisterButton,
} from "./LoginForm.style";
import { changeSession, useGalleryContext } from "../../../contexts";
import FormControl from "../../shared/form-control/FormControl";
import Button from "../../shared/button/Button";

export default function LoginForm() {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const { dispatch } = useGalleryContext();
  const navigator = useNavigate();

  const login = useMutation(
    ({ email, password }) => AuthService.login(email, password),
    {
      onSuccess: ({ user, token }) => {
        dispatch(changeSession(user));
        localStorage.setItem("authorization", token);
        navigator("/user/gallery", { replace: true });
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const onSubmit = async (values) => {
    login.mutate(values);
  };

  return (
    <FormContainer>
      <FormTitle>Login</FormTitle>

      <FormLogin onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Email */}
        <FormControl
          label="Email"
          placeholder="Type email"
          type="email"
          name="email"
          control={methods.control}
        />

        {/* Password */}
        <FormControl
          label="Password"
          placeholder="Type password"
          type="password"
          name="password"
          control={methods.control}
        />

        <ButtonGroup>
          <Button type="submit">Login</Button>
          <RegisterButton
            onClick={() => navigator("/auth/register")}
            type="button"
          >
            Create account
          </RegisterButton>
        </ButtonGroup>
      </FormLogin>
    </FormContainer>
  );
}
