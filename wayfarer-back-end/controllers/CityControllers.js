const db = require("../models");

const index = (req, res) => {
  db.City.find({}, (err, foundCities) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all cities"});
    
    res.json(foundCities);
  });
};

const show = (req, res) => {
  db.City.findById(req.params.cityId, (err, foundCity) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find a city by id."});

    res.json(foundCity);
  });
};

// ---------------------------------------------
//  Shouldn't be used by User
// ---------------------------------------------
const update = (req, res) => {
  db.City.findByIdAndUpdate(req.params.cityId, req.body, { new: true }, (err, updatedCity) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find a city by id and update"});

    res.json(updatedCity);
  });
};

const create = (req, res) => {
  db.City.create(req.body, (err, createdCity) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot create a new city"});

    res.json(createdCity);
  });
};

const destroy = (req, res) => {
  db.City.findByIdAndDelete(req.parmas.cityId, (err, result) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find city by id and delete"});

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