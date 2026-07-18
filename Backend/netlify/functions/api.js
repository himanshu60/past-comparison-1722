const serverless = require("serverless-http");
const { app, connection } = require("../../app");

const handler = serverless(app);

// The /api/* redirect in netlify.toml is a rewrite (status 200), so the
// event path stays as the original public-facing path — "/api/user/login" —
// rather than the function's own path. Strip whichever prefix is actually
// present (covers both a direct hit on /.netlify/functions/api/* and the
// /api/* rewrite) so Express sees the same paths it already routes locally
// (e.g. "/user/login", "/styles", "/Appointment/add").
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  event.path =
    event.path
      .replace(/^\/\.netlify\/functions\/api/, "")
      .replace(/^\/api/, "") || "/";

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
