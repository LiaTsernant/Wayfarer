const db = require("../models");

const index = (req, res) => {
  db.Comment.find({}, (err, foundComments) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all comments"});

    res.json(foundComments);
  });
};

const show = (req, res) => {
  db.Comment.findById(req.params.commentId, (err, foundComment) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find comment bycommentId"});

    res.json(foundComment);
  });
};

const update = (req, res) => {
  db.Comment.findByIdAndUpdate(req.params.commentId, req.body, { new: true }, (err, updatedComment) => {
    if (err) return res.status(404),json({ status: 404, error: "Cannot find comment by id and update"});

    res.json(updatedComment);
  });
};

const create = (req, res) => {
  db.Comment.create(req.body, (err, createdComment) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot create new comment"});

    res.json(createdComment);
  });
};

const destroy = (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId, (err, result) => {
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