const mongoose = require('mongoose')

const InvestigationSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
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