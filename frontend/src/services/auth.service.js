import { API_URL } from "../config/app.conf";

class AuthService {
  static async login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) throw new Error("Bad request");

    const data = await response.json();

    return data;
  }

  static async register(user) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 201) throw new Error("Bad request");

    const data = await response.json();

    return data;
  }
}

export default AuthService;
