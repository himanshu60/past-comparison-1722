const API_BASE_URL = (function () {
  var host = window.location.hostname;
  var isLocal = host === "localhost" || host === "127.0.0.1" || host === "";
  return isLocal ? "http://localhost:4500" : "/api";
})();
