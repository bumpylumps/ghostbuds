const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const locationsController = require('../controllers/locations');
const scheduleController = require('../controllers/schedule');
const teamsController = require('../controllers/team');
const aboutController = require('../controllers/about');
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', homeController.getIndex)
router.get('/locations', locationsController.getLocations);
router.get('/schedule', ensureAuth, scheduleController.getSchedule);
router.get('/team', ensureAuth, teamsController.getTeam);
router.get('/about', aboutController.getAbout);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);




module.exports = router 