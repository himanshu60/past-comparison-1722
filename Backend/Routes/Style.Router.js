const express = require("express");
const { StyleModel } = require("../Model/Style.Model");

const styleRouter = express.Router();

styleRouter.use(express.json());

styleRouter.get("/", async (req, res) => {
  const data = req.query;
  try {
    const style = await StyleModel.find();
    console.log(style);
    res.send(style);
  } catch (err) {
    console.log("err");
    console.log({ msg: "Something went wrong" });
  }
});

styleRouter.post('/', async (req, res) => {
    const { name, image,price, gender,description } = req.body;
    try {
            try {
                const style = new StyleModel({ name, image,price, gender,description })
                await style.save();
       
                return res.send({ message: 'Style Created Successfully' })
            } catch (error) {
                return res.status(500).send({ message: error.message });
            };

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

styleRouter.get("/male", async (req, res) => {
  try {
    let data = await StyleModel.aggregate([{ $match: { gender: "Male" } }]);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

styleRouter.get("/female", async (req, res) => {
  try {
    let data = await StyleModel.aggregate([{ $match: { gender: "Female" } }]);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = {
  styleRouter
};
