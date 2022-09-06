const mongoose = require('mongoose')


const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: false
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
    pictureUrl: {
        type: String, 
        required: false
    },
    source: {
        type: String,
        required: true
    }, 
    private: {
        type: Boolean,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Location', LocationSchema, 'locations')