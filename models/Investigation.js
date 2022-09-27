const mongoose = require('mongoose')

const InvestigationSchema = new mongoose.Schema({

    team: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    leader: {
        type: String,
        required: false
    },

})



module.exports = mongoose.model('Investigation', InvestigationSchema)