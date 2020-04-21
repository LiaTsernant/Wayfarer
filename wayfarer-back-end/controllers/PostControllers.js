const db = require("../models");

const index = (req, res) => {
    db.Post.find({})
    .populate('user', '_id firstName lastName photo')
    .populate('city', '_id name photo')
    .exec((err, foundPosts) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot find all posts." });

        res.json(foundPosts);
    });
};

const show = (req, res) => {
    db.Post.findById(req.params.postId) 
    .populate('user', '_id firstName lastName photo')
    .populate('city', '_id name photo')
    .exec((err, foundPost) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot find a post by id." });

        res.json(foundPost);
    });
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.postId, req.body, { new: true }, (err, updatedPost) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot find a post by id and update" });

        res.json(updatedPost);
    });
};

const create = (req, res) => {
    db.Post.create(req.body, (err, newPost) => {
      if (err) return res.status(404).json({ status: 404, error: "Cannot create a new post in the city." });

      res.json(newPost);
    })
};

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.postId, (err, result) => {
      if (err) return res.status(404).json({ status: 404, error: "Cannot find post by id and delete"});
  
      res.json(result);
    });
};

module.exports = {
    index,
    show,
    update,
    create,
    destroy
};