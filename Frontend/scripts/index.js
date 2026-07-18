/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */
import { Navbar } from "../components/Navbar.js";
import { initReveal, initCounters } from "./animations.js";
// // import Footer from "../components/Footer.js";

window.onload = () => {
  document.getElementById("nav-logo").src = "./images/locks & look (1).png";
  document.getElementById("logo-href").href = "./index.html";
  document.getElementById("bookhref").href = "./html/Mens_Services.html";
  document.getElementById("bookhref1").href = "./html/women_services.html";
  document.getElementById("viewhref").href = "./html/viewAppointment.html";
  document.getElementById("contacthref").href = "./admin-page/admin.html";
  document.getElementById("loginhref").href = "./html/login.html";
};

let nav = document.getElementById("NAVBAR");
nav.innerHTML = Navbar();

// copy nav container from index.html line 12 only
// In html file write like this "<script  type="module" src="./scripts/index.js"></script>" must include type=module

/* -------------------------------------------------------------------------- */
/*                  Shrink navbar + glass background on scroll                */
/* -------------------------------------------------------------------------- */

const visibleSentinel = document.getElementById("visible1");
const navBar = document.querySelector(".nav");

const affixObserver = new IntersectionObserver((entries) => {
  const isVisible = entries[0].isIntersecting;
  navBar.classList.toggle("affix", !isVisible);
});

affixObserver.observe(visibleSentinel);

/* -------------------------------------------------------------------------- */
/*                     Active nav link (per current page)                     */
/* -------------------------------------------------------------------------- */

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("#navlinks .nav-link").forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

/* -------------------------------------------------------------------------- */
/*                   Mobile drawer — hamburger open/close                     */
/* -------------------------------------------------------------------------- */

const navTrigger = document.querySelector(".navTrigger");
const mainListDiv = document.querySelector("#mainListDiv");
let drawerOverlay = null;

function openDrawer() {
  navTrigger.classList.add("active");
  mainListDiv.classList.add("show_list");
  navTrigger.setAttribute("aria-expanded", "true");

  drawerOverlay = document.createElement("div");
  drawerOverlay.className = "drawer-overlay";
  drawerOverlay.addEventListener("click", closeDrawer);
  document.body.appendChild(drawerOverlay);
}

function closeDrawer() {
  navTrigger.classList.remove("active");
  mainListDiv.classList.remove("show_list");
  navTrigger.setAttribute("aria-expanded", "false");

  if (drawerOverlay) {
    drawerOverlay.remove();
    drawerOverlay = null;
  }
}

function toggleDrawer() {
  if (mainListDiv.classList.contains("show_list")) {
    closeDrawer();
  } else {
    openDrawer();
  }
}

navTrigger.addEventListener("click", toggleDrawer);
navTrigger.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleDrawer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mainListDiv.classList.contains("show_list")) {
    closeDrawer();
  }
});

/* --------------------------------- Footer --------------------------------- */

// let footer = document.getElementById("footer-main");
// footer.innerHTML = Footer();

const copyYearEl = document.getElementById("copyYear");
if (copyYearEl) {
  copyYearEl.textContent = new Date().getFullYear();
}

/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                             section-two slider                             */
/* -------------------------------------------------------------------------- */
const TIMEOUT = 4000;

let $radios, $activeRadio, currentIndex, radiosLength;

const handleNext = () => {
  $radios = $('input[class*="slide-radio"]');
  $activeRadio = $('input[class*="slide-radio"]:checked');

  currentIndex = $activeRadio.index();
  radiosLength = $radios.length;

  $radios.prop("checked", false);

  if (currentIndex >= radiosLength - 1) {
    $radios.first().click();
  } else {
    $activeRadio.next('input[class*="slide-radio"]').click();
  }
};

let interval = setInterval(handleNext, TIMEOUT);

const myStopFunction = () => {
  clearInterval(interval);
};

$(".slider").hover(() => {
  myStopFunction();
});

$(".slider").mouseleave(() => {
  interval = setInterval(handleNext, TIMEOUT);
});

/* --------------------- media query for video Section-1 -------------------- */

let x = window.matchMedia("(max-width:760px)");
let heroVideo = document.getElementById("herovideo");
let largeVideo = "./images/sec.mp4";
let smallVideo = "./images/sec.mp4";

function videoChange() {
  heroVideo.src = x.matches ? smallVideo : largeVideo;
}
videoChange();

let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(videoChange, 250);
});

/* -------------------------------------------------------------------------- */
/*                           Section-3 CTA behaviour                          */
/* -------------------------------------------------------------------------- */

document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

/* -------------------------------------------------------------------------- */
/*                            Contact form feedback                           */
/* -------------------------------------------------------------------------- */
// There is no backend endpoint for the contact form, so rather than posting
// to "#" (which just reloads the page), acknowledge the submission in-page
// and reset the fields. This is a UI acknowledgment only — nothing is sent.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    contactForm.reset();
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Thanks! We'll get back to you soon.",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  });
}

/* -------------------------------------------------------------------------- */
/*                       Reveal-on-scroll + stat counters                     */
/* -------------------------------------------------------------------------- */

initReveal();
initCounters();

/* -------------------------------------------------------------------------- */
/*                    Nav auth state — Login/Signup vs user chip              */
/* -------------------------------------------------------------------------- */

renderNavAuthState("#loginhref", {
  homeHref: "index.html",
  loginHref: "./html/login.html",
  confirmLogout: () =>
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout!",
    }).then((result) => {
      if (!result.isConfirmed) return false;
      return Swal.fire("Logout Successfull!").then(() => true);
    }),
});
