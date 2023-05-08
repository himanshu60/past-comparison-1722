const mongoose = require('mongoose');

const StyleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
})

const StyleModel = mongoose.model('style', StyleSchema)

module.exports = {
    StyleModel
}