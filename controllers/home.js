module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getLocations: (req, res) => {
        res.render('locations.ejs')
    },
    getAddLocation: (req, res) => {
        res.render('addLocation.ejs')
    }
}