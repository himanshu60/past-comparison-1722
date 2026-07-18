const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/Users.Router");

const { styleRouter } = require("./Routes/Style.Router");
const { appointmentRouter } = require("./Routes/viewAppointment");

const app = express();

// --------------->>>>>>>> Middlewares <<<<<<<<-------------------

app.use(cors());

app.use(express.json());

// --------------->>>>>>>> Default End Point <<<<<<<<-------------------

app.get("/", (req, res) => res.send(`welcome`));

// --------------->>>>>>>> Routers <<<<<<<<-------------------

app.use("/user", userRouter);
app.use("/Appointment", appointmentRouter);

app.use("/styles", styleRouter);

module.exports = { app, connection };
