module.exports = app => {
    const sighting = require("../controllers/sighting.controller.js");
  
    // Create a new Sighting
    app.post("/sightings", sighting.create);
  
    // Retrieve all Customers
    app.get("/sightings", sighting.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/sighting/:sightingId", sighting.findOne);
  
    // Update a Customer with customerId
    app.put("/sighting/:sightingId", sighting.update);
  
    // Delete a Customer with customerId
    app.delete("/sighting/:sightingId", sighting.delete);
  };