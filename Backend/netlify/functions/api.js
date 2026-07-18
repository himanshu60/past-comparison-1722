const serverless = require("serverless-http");
const { app, connection } = require("../../app");

const handler = serverless(app);

// The /api/* redirect in netlify.toml forwards requests here, but the
// event path still carries the full "/.netlify/functions/api" prefix —
// strip it so Express sees the same paths it already routes locally
// (e.g. "/user/login", "/styles", "/Appointment/add").
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  event.path = event.path.replace("/.netlify/functions/api", "") || "/";

  // On a cold start, Mongoose's default query buffering means a route
  // handler's DB call can silently wait (up to 10s) for the connection
  // instead of failing straight away — worse, on a fresh invocation the
  // very first query can fire before the connection is even established.
  // Waiting on it here means every request either proceeds against a
  // real connection or fails immediately with a clear error, instead of
  // racing or hanging until the platform's own timeout kills the function.
  try {
    await connection;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Database connection failed",
        error: error.message,
      }),
    };
  }

  return handler(event, context);
};
