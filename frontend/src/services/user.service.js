import { API_URL } from "../config/app.conf";

class UserService {
  static async gallery(page = 1, limit = 10, query) {
    const authorization = localStorage.getItem("authorization");

    const params = new URLSearchParams({
      page,
      limit,
      ...(query && { query }),
    });

    const response = await fetch(`${API_URL}/user/gallery?` + params, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });

    const photos = await response.json();

    return photos;
  }

  static async session() {
    try {
      const authorization = localStorage.getItem("authorization");
      if (!authorization) {
        return null;
      }

      const response = await fetch(`${API_URL}/user/session`, {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      });

      const user = await response.json();

      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default UserService;
