const express = require ("express");
const cors = require("cors");

const app = express();

require("dotenv").config();


const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/Users.Router");
const { authenticate } = require("./Middleware/authentication.middleware")

const { styleRouter } = require("./Routes/Style.Router");
const { appointmentRouter } = require("./Routes/viewAppointment");



// --------------->>>>>>>> Middlewares <<<<<<<<-------------------

app.use(cors());

app.use(express.json());


// --------------->>>>>>>> Default End Point <<<<<<<<-------------------

app.get("/", (req, res) => res.send(`welcome`));



// --------------->>>>>>>> Routers <<<<<<<<-------------------

app.use("/user", userRouter);
app.use("/Appointment", appointmentRouter);

app.use("/styles", styleRouter);



// app.use(authenticate);


// --------------->>>>>>>> Server Running <<<<<<<<-------------------

app.listen(process.env.PORT, async () => {
  try {
    connection;
    console.log(`Connected to Database`);
    console.log(`Server listening on ${process.env.PORT}`);
  } catch (error) {
    console.log(`Error while connecting to ${error.message}`);
  }
});