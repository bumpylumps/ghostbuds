const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    team: {
        type: String, 
        required: false
    },
    locationVote: {
        type: String, 
        required: false
    },
    scheduleVote: {
        type: Number, 
        required: false
    }
   
})


module.exports = mongoose.model('User', UserSchema)