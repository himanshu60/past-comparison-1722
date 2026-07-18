const serverless = require("serverless-http");
const { app } = require("../../app");

const handler = serverless(app);

// The /api/* redirect in netlify.toml forwards requests here, but the
// event path still carries the full "/.netlify/functions/api" prefix —
// strip it so Express sees the same paths it already routes locally
// (e.g. "/user/login", "/styles", "/Appointment/add").
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  event.path = event.path.replace("/.netlify/functions/api", "") || "/";
  return handler(event, context);
};
