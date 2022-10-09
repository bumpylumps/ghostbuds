const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer")
const teamController = require("../controllers/team")

router.get('/newEvidencePage', teamController.getNewEvidencePage);

router.post("/createEvidence", upload.single("file"), teamController.newEvidence)

module.exports = router