const db = require("../models");

const index = (req, res) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot find all users." });

        res.json(foundUsers);
    });
};

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot find a user by id." });

        res.json(foundUser);
    });
};

const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot find a user by id and update" });
        res.json(updatedUser);
    });
};

const create = (req, res) => {
    db.User.create(req.body, (err, newUser) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot create a new user" });

        res.json(newUser);
    });
};

const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot find a user by id and delete" });

        res.json(result);
    });
};

module.exports = {
    index,
    show,
    update,
    create,
    destroy,
};
  