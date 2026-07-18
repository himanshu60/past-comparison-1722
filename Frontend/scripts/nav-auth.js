var NAV_AUTH_USER_ICON =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

var NAV_AUTH_LOGOUT_ICON =
  '<svg class="logout-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>';

function renderNavAuthState(selector, options) {
  options = options || {};
  var homeHref = options.homeHref || "index.html";
  var loginHref = options.loginHref || "login.html";
  var confirmLogout = options.confirmLogout;

  function doLogout() {
    localStorage.removeItem("userdata");
    localStorage.removeItem("token");
    window.location.href = homeHref;
  }

  function apply() {
    var link = document.querySelector(selector);
    if (!link) return;

    var stored = JSON.parse(localStorage.getItem("userdata") || "null");
    var token = localStorage.getItem("token") || (stored && stored.token);

    if (token) {
      var name = (stored && stored.user && stored.user.name) || "Account";
      link.classList.add("user-chip");
      link.innerHTML =
        NAV_AUTH_USER_ICON +
        '<span class="user-chip-name"></span>' +
        NAV_AUTH_LOGOUT_ICON;
      link.querySelector(".user-chip-name").textContent = name;
      link.href = "#";
      link.onclick = function (event) {
        event.preventDefault();
        if (confirmLogout) {
          Promise.resolve(confirmLogout()).then(function (confirmed) {
            if (confirmed) doLogout();
          });
        } else {
          doLogout();
        }
      };
    } else {
      link.classList.remove("user-chip");
      link.textContent = "Login / Signup";
      link.href = loginHref;
      link.onclick = null;
    }
  }

  apply();
  // A page restored from the browser's back/forward cache (bfcache) keeps
  // its DOM exactly as it was when left — including whatever auth state was
  // rendered last time — without re-running this script. pageshow fires on
  // both a normal load and a bfcache restore, so re-applying here keeps the
  // nav in sync with localStorage either way.
  window.addEventListener("pageshow", apply);
}
