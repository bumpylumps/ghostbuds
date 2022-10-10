const mongoose = require('mongoose')


const LocationSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String, 
        required: true
    },
    cloudinaryId: {
        type: String
    },
    streetAddress: {
        type: String, 
        required: false
    }, 
    townOrCity: {
        type: String, 
        required: true
    },
    state: {
        type: String,
        required: true
    }, 
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number, 
        required: true
    },
    phenomena: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: false
    },
    source: {
        type: String,
        required: true
    }, 
    private: {
        type: Boolean,
        default: false, 
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Location', LocationSchema)