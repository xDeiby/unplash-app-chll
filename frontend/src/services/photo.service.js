import { API_URL } from "../config/app.conf";

class PhotoService {
  static async addPhoto(photo) {
    const authorization = localStorage.getItem("authorization");

    const response = await fetch(`${API_URL}/photos`, {
      method: "POST",
      body: JSON.stringify(photo),
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const newPhoto = await response.json();

    return newPhoto;
  }

  static async updatePhoto(photoId, photoChanges) {
    const authorization = localStorage.getItem("authorization");

    const response = await fetch(`${API_URL}/photos/${photoId}`, {
      method: "PATCH",
      body: JSON.stringify(photoChanges),
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const modifiedPhoto = await response.json();

    return modifiedPhoto;
  }

  static async removePhoto(photoId) {
    const authorization = localStorage.getItem("authorization");

    const response = await fetch(`${API_URL}/photos/${photoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authorization}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const removedPhoto = await response.json();

    return removedPhoto;
  }
}

export default PhotoService;
