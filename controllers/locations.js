const cloudinary = require('../middleware/cloudinary')
const Location = require('../models/Location')
const Investigation = require('../models/Investigation')


module.exports = {
    getLocations : async(req, res) => {
        try {
            const generalLocations = await Location.find({});
            //const userLocations = await Location.find({ username: req.user.username });
            res.render('locations.ejs', { generalLocations: generalLocations /*userLocations: userLocations*/ }) 

        } catch (err) {
            console.log(err)
        }
    },
    addLocation : async (req, res) => {
        try {
            res.render('addLocation.ejs')
        } catch (err) {
            console.log(err)
        }
    },
    newLocation: async (req,res) => {
           try {

            const result = await cloudinary.uploader.upload(req.file.path)
            
            const location = new Location({
                image: result.secure_url,
                cloudinaryId: result.public_id,
                name: req.body.locationName,
                userName: req.user.userName,
                townOrCity: req.body.townOrCity,
                state: req.body.state,
                streetAddress: req.body.streetAddress,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                phenomena: req.body.phenomena,
                story: req.body.story,
                source:  req.body.source
            });
            
         
            
            await location.save()
            console.log("Location has been added!")
            res.redirect('/locations')

        } catch(err) {
            console.log(err)
        }
    },
    specificLocation: async (req,res) => {
                try {
                    const location = await Location.findById(req.params.id);
                    res.render('specificLocation.ejs', {
                            location: location
                        })
                        console.log(location)
              } catch (err) {
                console.log(err);
              }
    },
    setLocation: async (req, res) => {
        try {
        let location = await Location.findById(req.params.id);
        let name = location.name
       await Investigation.findOneAndUpdate(
            { user: req.user.userName },
          {
            $set: {"location": `${name}`}
          });
          res.redirect(`/team`);
        } catch (err) {
          console.log(err);
        }
    }
};