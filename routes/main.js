const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const locationsController = require('../controllers/locations')
const scheduleController = require('../controllers/schedule')
const teamsController = require('../controllers/team')
const aboutController = require('../controllers/about')

router.get('/', homeController.getIndex)
router.get('/locations', locationsController.getLocations);
router.get('/schedule', scheduleController.getSchedule);
router.get('/team', teamsController.getTeam);
router.get('/about', aboutController.getAbout);




module.exports = router 