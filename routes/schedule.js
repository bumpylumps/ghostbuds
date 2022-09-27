const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/schedule")

router.post('/setSchedule', scheduleController.setSchedule)

module.exports = router