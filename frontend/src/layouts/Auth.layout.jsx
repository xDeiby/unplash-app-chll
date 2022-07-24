import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeSession, useGalleryContext } from "../contexts";
import { UserService } from "../services";

export default function AuthLayout({ children }) {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const { dispatch, session } = useGalleryContext();

  useEffect(() => {
    const sessionUser = async () => {
      setLoading(true);
      const user = await UserService.session();

      if (!user) {
        localStorage.removeItem("authorization");
        navigator("/auth/login", { replace: true });
      }

      dispatch(changeSession(user));
      setLoading(false);
    };

    !session && sessionUser();
  }, [navigator, session]);

  return <>{loading ? <h1>loading...</h1> : children}</>;
}
