import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(5, "password must be greatter than 5 characters")
    .required("password is required"),
});
