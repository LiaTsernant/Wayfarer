module.exports = {
    users: require("./UserControllers"),
    auth: require("./authControllers"),
    posts: require("./PostControllers"),
    cities: require("./CityControllers"),
    comments: require("./CommentControllers"),
    aws_bucket: require('./aws_bucket')
};