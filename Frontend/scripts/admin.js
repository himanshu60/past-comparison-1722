let data = [
  {
    email: "himanshu@gmail.com",
    pass: "admin4321",
    profile: "../logo/person-logo.png",
  },
  {
    email: "asif@gmail.com",
    pass: "4321",
    profile: "../logo/person-logo.png",
  },
  {
    email: "snehasish@gmail.com",
    pass: "admin4321",
    profile: "../images/person-logo.png",
  },
  {
    email: "ankita@gmail.com",
    pass: "admin4321",
    profile: "../logo/IMG_20211101_152537.jpg",
  },
];
let emailValue = document.getElementById("email");
let passwordValue = document.getElementById("password");
let form = document.querySelector("form");
// userinfo

form.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("email", JSON.stringify(data));
  let passI = form.password.value;
  let emailI = form.email.value;
  if (passI != "" && emailI != "") {
    data.forEach((ele) => {
      if (ele.email == emailI && ele.pass == passI) {
        localStorage.setItem("e", emailI);
        self.location = "dashboard.html";
      }
      
    });
  }
});


// ------------------- DarkMode Part ----------------------

const Moon = document.querySelector("#moon");
const HTML = document.querySelector('html');
const LoginBox = document.querySelector('.login-box');

Moon.addEventListener("click", (e) => {
  if (Moon.className == "bx bx-moon") {
    e.target.className = "bx bxs-sun";
    HTML.style.background="white";
    LoginBox.id = "lg";
  } else {
     window.location.reload();
  }
});