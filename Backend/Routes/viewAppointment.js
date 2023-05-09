const express = require("express")

const {Appointment} = require('../Model/appointment.model')
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
        res.send({msg: "Something went wrong", err: error.message})
    }
})

appointmentRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const deleteduser = await Appointment.findByIdAndRemove({ _id: id });
      res.send(deleteduser);
      console.log(deleteduser);
    } catch (err) {
      res.send({ status: err.message });
    }
  });

module.exports = {appointmentRouter}
