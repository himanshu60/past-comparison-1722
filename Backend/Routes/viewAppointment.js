const express = require("express")

const {Appointment} = require('../models/appointment.model')
const appointmentRouter = express.Router()

appointmentRouter.get("/", async(req,res)=>{
    try {
        const data = await Appointment.find()
        res.status(200).send({msg: data})
    } catch (error) {
        res.status(400).send({msg: "Something went wrong", err: error.message})
    }
})

appointmentRouter.post("/add", async(req,res)=>{
    try {
        const payload = req.body;
        const adding = new Appointment(payload);
        await adding.save();
        console.log(payload)
        res.send({d: "HDLAH", msg: payload});
    } catch (error) {
        console.log(error.message);
        ews.send({msg: "Something went wrong", err: error.message})
    }
})


module.exports = {appointmentRouter}
