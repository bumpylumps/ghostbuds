const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({

    Users: {
        type: String,
        required: true
    },
    investigationLocation: {
        type: String,
        required: false
    },
    investigationSchedule: {
        type: String, 
        required: false
    }
})



module.exports = mongoose.model('Team', TeamSchema)