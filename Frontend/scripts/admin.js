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

function notify(message, type) {
  if (typeof showToast === "function") {
    showToast(message, type);
  } else {
    alert(message);
  }
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("email", JSON.stringify(data));
  let passI = form.password.value;
  let emailI = form.email.value;

  if (passI == "" || emailI == "") {
    notify("Please enter both email and password.", "error");
    return;
  }

  const match = data.find((ele) => ele.email == emailI && ele.pass == passI);
  if (match) {
    localStorage.setItem("e", emailI);
    notify("Welcome back! Redirecting…", "success");
    setTimeout(() => {
      self.location = "dashboard.html";
    }, 700);
  } else {
    notify("Invalid admin credentials.", "error");
  }
});