const { app, connection } = require("./app");

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
