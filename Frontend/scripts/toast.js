function getToastContainer() {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.setAttribute("aria-live", "polite");
    document.body.appendChild(container);
  }
  return container;
}

function showToast(message, type) {
  type = type || "success";
  const container = getToastContainer();

  const toast = document.createElement("div");
  toast.className = "toast toast--" + type;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(function () {
    toast.classList.add("toast--visible");
  });

  setTimeout(function () {
    toast.classList.remove("toast--visible");
    setTimeout(function () {
      toast.remove();
    }, 250);
  }, 3500);
}

function isLoggedIn() {
  const stored = JSON.parse(localStorage.getItem("userdata") || "null");
  return Boolean(localStorage.getItem("token") || (stored && stored.token));
}

function requireLoginOrRedirect(loginUrl, message) {
  if (isLoggedIn()) return true;
  showToast(message || "Please log in to book an appointment.", "info");
  setTimeout(function () {
    window.location.href = loginUrl;
  }, 1100);
  return false;
}
