import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import FormControl from "../../shared/form-control/FormControl";
import {
  ButtonGroup,
  FormContainer,
  FormRegister,
  FormTitle,
  LoginButton,
} from "./RegisterForm.style";
import { registerSchema } from "../../schemas/registerSchema";
import Button from "../../shared/button/Button";
import { AuthService } from "../../../services";
import { changeSession, useGalleryContext } from "../../../contexts";

export default function RegisterForm() {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  const { dispatch } = useGalleryContext();
  const navigator = useNavigate();
  const register = useMutation((user) => AuthService.register(user), {
    onSuccess: ({ user, token }) => {
      dispatch(changeSession(user));
      localStorage.setItem("authorization", token);
      navigator("/user/gallery", { replace: true });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (values) => {
    register.mutate(values);
  };

  return (
    <FormContainer>
      <FormTitle>Register</FormTitle>
      <FormRegister onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Firstname */}
        <FormControl
          label="Firstname"
          placeholder="Type firstname"
          type="text"
          name="name"
          control={methods.control}
        />

        {/* Lastname */}
        <FormControl
          label="Lastname"
          placeholder="Type lastname"
          type="text"
          name="lastName"
          control={methods.control}
        />

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
          placeholder="*************"
          type="password"
          name="password"
          control={methods.control}
        />

        <ButtonGroup>
          <Button type="submit">Create account</Button>
          <LoginButton onClick={() => navigator("/auth/login")} type="button">
            I have an account
          </LoginButton>
        </ButtonGroup>
      </FormRegister>
    </FormContainer>
  );
}
