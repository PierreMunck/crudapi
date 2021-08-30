const sql = require("./db.js");

const Sighting = function(sighting) {
    this.lat = sighting.lat;
    this.lng = sighting.lng;
    this.time = sighting.time;
    this.description = sighting.description;
};

Sighting.create = (newSighting, result) => {
    sql.query("INSERT INTO sightings SET ?", newSighting, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created Sighting: ", { id: res.insertId, ...newSighting });
      result(null, { id: res.insertId, ...newSighting });
    });
  };

Sighting.getAll = result => {
    sql.query("SELECT * FROM sightings", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("sightings: ", res);
      result(null, res);
    });
  };

Sighting.remove = (id, result) => {
    sql.query("DELETE FROM sightings WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted sightings with id: ", id);
      result(null, res);
    });
  };

module.exports = Sighting;