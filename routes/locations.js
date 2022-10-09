const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth');
const locationsController = require("../controllers/locations");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Location Routes
//get addlocation page
router.get('/addLocation', ensureAuth, locationsController.addLocation)

//add new location to db 
router.post("/newLocation", locationsController.newLocation); 

//get specific location
router.get('/specificLocation/:id', locationsController.specificLocation);


router.get('/specificLocation/:id/setLocation', ensureAuth, locationsController.setLocation);

module.exports = router; 