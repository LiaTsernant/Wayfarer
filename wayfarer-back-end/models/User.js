const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    city: String,
    photo: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    },
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);