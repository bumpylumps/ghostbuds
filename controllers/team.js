const cloudinary = require("../middleware/cloudinary");
const Investigation = require('../models/Investigation');
const User = require('../models/User')
const Location = require('../models/Location')
const Evidence = require('../models/Evidence')

module.exports = {
        getTeam: async (req, res) => {
            try {
            const user = await User.findById({ _id: req.user.id }) 
            const investigation = await Investigation.findOne({user : req.user.userName})
            const location = await Location.find({ name: investigation.location })
            const evidenceFiles = await Evidence.find({ user: req.user.id })
            res.render('team.ejs', { investigation: investigation, user: user, location: location, evidenceFiles: evidenceFiles })
            } catch(err) {
                console.log(err)
            }
        },
        getNewEvidencePage: async (req,res) => {
            try {
                res.render("newEvidence.ejs")
            } catch (err) {
                console.log(err)
            }
        },
        newEvidence: async (req,res) => {
            try {
                //cloudinary upload
                const result = await cloudinary.uploader.upload(req.file.path);
                
                await Evidence.create({
                    date: req.body.date,
                    location: req.body.evidenceLocation,
                    notes: req.body.notes,
                    image: result.secure_url,
                    cloudinaryId: result.public_id,
                    audio: result.secure_url,
                    user: req.user.id
                });
                console.log('Evidence has been added!');
                res.redirect("/team")
            } catch(err){
                console.log(err)
            }
        },
        
    };
