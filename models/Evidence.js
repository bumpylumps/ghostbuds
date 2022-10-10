const mongoose = require('mongoose')

const EvidenceSchema = new mongoose.Schema({
    user: {
        type: String
    },
    date: {
        type: Date, 
        default: Date.now
    },
    location: {
        type: String
    },
    notes: {
        type: String,
    },
    image: {
        type: String 
    },
    cloudinaryId: {
        type: String
    },
    audio: {
        type: String
    }

})


module.exports = mongoose.model("Evidence", EvidenceSchema);