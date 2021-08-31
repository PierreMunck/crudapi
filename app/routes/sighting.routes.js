module.exports = app => {
    const sighting = require("../controllers/sighting.controller.js");
  
    // Create a new Sighting
    app.post("/sightings", sighting.create);
  
    // Retrieve all Sightings
    app.get("/sightings", sighting.findAll);
  
    // Retrieve a single Sighting with sightingId
    app.get("/sighting/:sightingId", sighting.findOne);
  
    // Update a Sighting with sightingId
    app.put("/sighting/:sightingId", sighting.update);
  
    // Delete a Sighting with sightingId
    app.delete("/sighting/:sightingId", sighting.delete);
  };