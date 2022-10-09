const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team")

router.get('/newEvidencePage', teamController.getNewEvidencePage);

module.exports = router