const Sighting = require("../models/sighting.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }

      const sighting = new Sighting({
        lat: req.body.lat,
        lng:  req.body.lng,
        time:  req.body.time,
        description:  req.body.description
      });

      Sighting.create(sighting, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Sighting."
          });
        else res.send(data);
      });
};

exports.findAll = (req, res) => {
    Sighting.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving sighting."
          });
        else res.send(data);
      });
};

exports.findOne = (req, res) => {
  Sighting.findById(req.params.sightingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Sighting with id ${req.params.sightingId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Sighting with id " + req.params.sightingId
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Sighting.updateById(
    req.params.sightingId,
    new Sighting(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Sighting with id ${req.params.sightingId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Sighting with id " + req.params.sightingId
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Sighting.remove(req.params.sightingId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Sighting with id ${req.params.sightingId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Sighting with id " + req.params.sightingId
        });
      }
    } else res.send({ message: `Sighting was deleted successfully!` });
  });
};