const { default: mongoose } = require("mongoose");
const Photo = require("../models/photo.model");
const User = require("../models/user.model");

class UserService {
  static async find(userId) {
    const user = await User.findById(userId);

    if (!user) throw new Error("user does not exist");

    return user;
  }

  static async gallery(userId, query = null, limit = 10, page = 1) {
    const photos = {
      query,
    };

    const pipelines = [
      {
        $match: { userId: mongoose.Types.ObjectId(userId) },
      },
      { $limit: page * limit },
      { $skip: (page - 1) * limit },
    ];

    if (query) {
      pipelines.unshift({ $match: { $text: { $search: query } } });
    }

    photos.results = await Photo.aggregate(pipelines);

    photos.total = await Photo.find({
      userId: mongoose.Types.ObjectId(userId),
    }).count();

    photos.nextPage = page * limit < photos.total ? page + 1 : null;
    photos.prevPage = page > 1 ? page - 1 : null;

    return photos;
  }
}

module.exports = UserService;
