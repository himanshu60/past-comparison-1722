const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const { UserModel } = require("../Model/User.Model");
const { authentication } = require("../Middleware/authentication.middleware");
const { BlacklistModel } = require("../Model/Blacklist.Model");

const userRouter = express.Router();

userRouter.use(express.json());

userRouter.post("/signup", async (req, res) => {
  const { name, mobile, email, password } = req.body;
  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(403).send({ message: "User already registered" });
    }
    bcrypt.hash(
      password,
      +process.env.saltRounds,
      async function (err, hashedPass) {
        if (err) {
          return res.status(500).send({ message: err.message });
        }
        try {
          const user = new UserModel({
            name,
            password: hashedPass,
            mobile,
            email,
          });
          await user.save();
          const blacklist = new BlacklistModel({ user_id: user._id });
          await blacklist.save();
          return res.send({ message: "User signup sucessfull" });
        } catch (error) {
          return res.status(500).send({ message: error.message });
        }
      }
    );
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user == null) {
      return res.status(403).send({ message: "User not registered" });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      if (!result) {
        return res.status(401).send({ message: "Wrong Credentials" });
      }
      console.log(user);
      const token = jwt.sign(
        { name: user.name, role: user.role, id: user._id },
        process.env.KEY
      );
      res.send({ message: "Login Sucessfull", token, user });
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

userRouter.post("/logout", authentication, async (req, res) => {
  let { token } = req.body;
  const user_id = token.id;
  token = req.headers.authorization;
  try {
    const blacklist = await BlacklistModel.findOne({ user_id });
    blacklist.tokens.push(token);
    await blacklist.save();
    return res.send({ message: "Logout Successfull" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

userRouter.get("/get", async (req, res, next) => {
  // const payload = req.body;
  try {
    const user = await UserModel.find();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//delete data
userRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteduser = await UserModel.findByIdAndRemove({ _id: id });
    res.send(deleteduser);
    console.log(deleteduser);
  } catch (err) {
    res.send({ status: err.message });
  }
});

module.exports = {
  userRouter,
};
