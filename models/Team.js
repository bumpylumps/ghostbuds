const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    Name: {
        type: String, 
        unique: true,
        required: true
    },
    password: String,
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