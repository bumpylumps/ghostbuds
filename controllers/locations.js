const Location = require('../models/Location')
const Investigation = require('../models/Investigation')


module.exports = {
    getLocations : async(req, res) => {
        try {
            Location.find({}, (err, data) => {
                res.render('locations.ejs', {
                    data
                })
            })

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
        
            const location = new Location({
                name: req.body.locationName,
                townOrCity: req.body.townOrCity,
                state: req.body.state,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                phenomena: req.body.phenomena,
                story: req.body.story,
                source:  req.body.source
            });
            
            try {
            
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
              } catch (err) {
                console.log(err);
              }
    },
    setLocation: async (req, res) => {
        try {
        let location = await Location.findById(req.params.id);
        let name = location.name
        await Investigation.findByIdAndUpdate('63320430577babf1e086d74d',
          {
            $set: {"location": `${name}`}
          });
          res.redirect(`/`);
        } catch (err) {
          console.log(err);
        }
    }
};