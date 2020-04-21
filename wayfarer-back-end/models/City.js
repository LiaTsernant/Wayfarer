const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    name: String,
    country: String,
    photo: String,
    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
}, {timestamps: true});

module.exports = mongoose.model("City", CitySchema);