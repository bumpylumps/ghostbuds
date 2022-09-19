const express = require("express");
const router = express.Router();
const locationsController = require("../controllers/locations")


//Location Routes
//get addlocation page
router.get('/addLocation', locationsController.addLocation)

//add new location to db 
router.post("/newLocation", locationsController.newLocation); 

//get specific location
router.get('/specificLocation', locationsController.specificLocation);

module.exports = router; 