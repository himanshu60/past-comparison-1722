const mongoose = require('mongoose');
require('dotenv').config()

const connection = mongoose.connect(process.env.mongoURL);

// Without this, a rejected connection (e.g. missing/invalid mongoURL) is an
// unhandled promise rejection, which crashes the whole Node process — fatal
// for a persistent server and fatal for a Netlify Function (the entire
// function returns a 502 for every route, not just ones that touch the DB).
connection.catch((error) => {
    console.error(`MongoDB connection error: ${error.message}`);
});

module.exports = {
    connection
}