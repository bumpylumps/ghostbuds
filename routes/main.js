const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
router.get('/addLocation', homeController.getAddLocation)
router.get('/locations', homeController.getLocations)
module.exports = router 