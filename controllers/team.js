const Investigation = require('../models/Investigation');
const User = require('../models/User')
const Location = require('../models/Location')
const Evidence = require('../models/Evidence')

module.exports = {
        getTeam: async (req, res) => {
            try {
            const user = await User.findById({ _id: req.user.id }) 
            const investigation = await Investigation.findById('63320430577babf1e086d74d')
            const location = await Location.find({ name: investigation.location })
            console.log(location[0])
            res.render('team.ejs', { investigation: investigation, user: user, location: location })
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

                const evidence = new Evidence({
                    date: req.body.date,
                    location: req.body.location,
                    notes: req.body.notes,
                    image: result.secure.url,
                    cloudinaryId: result.public_id,
                    audio: result.secure.url
                });
                console.log('Evidence has been added!');
                res.redirect("/team")
            } catch(err){
                console.log(err)
            }
        },
        
    }
