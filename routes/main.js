const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const locationsController = require('../controllers/locations')

router.get('/', homeController.getIndex)
router.get('/locations', locationsController.getLocations);




module.exports = router 