import { GalleryPage, LoginPage, RegisterPage } from "../pages";

const routes = [
  {
    name: "gallery",
    page: GalleryPage,
    to: "/user/gallery",
    path: "user/gallery",
    auth: true,
    default: true,
  },
  {
    name: "login",
    page: LoginPage,
    to: "/auth/login",
    path: "auth/login",
  },
  {
    name: "register",
    page: RegisterPage,
    to: "/auth/register",
    path: "auth/register",
  },
];

export default routes;
