const { isValidObjectId } = require("mongoose");
const Photo = require("../models/photo.model");
const User = require("../models/user.model");

class PhotoService {
  static async create(photo) {
    if (!isValidObjectId(photo.userId)) throw new Error("invalid id");

    const user = await User.findById(photo.userId);

    if (!user) throw new Error("user does not exist");

    const newPhoto = new Photo(photo);
    await newPhoto.save();

    return newPhoto;
  }

  static async update(id, photo, userId) {
    const photoFind = await Photo.findById(id);

    if (!photoFind) throw new Error("photo does not exist");

    if (!photoFind.userId.equals(userId)) throw new Error("Forbidden");

    await photoFind.updateOne(photo);

    return photoFind;
  }

  static async remove(id, userId) {
    const photoFind = await Photo.findById(id);

    if (!photoFind) throw new Error("photo does not exist");

    if (!photoFind.userId.equals(userId)) throw new Error("Forbidden");

    const removedPhoto = await photoFind.deleteOne();

    return removedPhoto;
  }
}

module.exports = PhotoService;
