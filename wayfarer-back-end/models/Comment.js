const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    // Has body
    body: {
        type: String,
        minlength: 1,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

module.exports = mongoose.model("Comment", CommentSchema);