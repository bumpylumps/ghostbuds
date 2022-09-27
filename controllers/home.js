const Investigation = require('../models/Investigation');

module.exports = {
    getIndex: (req, res) => {
        try {
        Investigation.findById('63320430577babf1e086d74d', (err, data) => {
            res.render('index.ejs', {data})
            console.log(data)
        })
        
        } catch(err) {
            console.log(err)
        }
    }
}