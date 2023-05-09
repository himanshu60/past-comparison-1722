const {Schema, default: mongoose} = require("mongoose")

const appointmentSchema = new Schema({
    // name: {type: String},
    // price: {type: Number},
    // gender: {type: String},
    // image: {type: String},
    // description: {type: String},
    date: {type: String},
    stylerName: {type: String, required: true},
    time: {type: String},
    stylesID: {
        type: String,
        ref: "styles",
        required: true
    }
})

const Appointment = mongoose.model("appointment", appointmentSchema)

module.exports = {Appointment}