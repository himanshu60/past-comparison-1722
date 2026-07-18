// showToast() is provided globally by scripts/toast.js (loaded before this file)

// ---------------password visibility toggle----------------

document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    const icon = btn.querySelector("i");
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    icon.classList.toggle("fa-eye", !isHidden);
    icon.classList.toggle("fa-eye-slash", isHidden);
    btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
});

// ---------------validation helpers----------------

function clearFieldErrors(form) {
  form.querySelectorAll(".input-box.has-error").forEach((box) => box.classList.remove("has-error"));
  form.querySelectorAll(".field-error").forEach((el) => el.remove());
}

function setFieldError(input, message) {
  const box = input.closest(".input-box");
  if (!box) return;
  box.classList.add("has-error");
  const error = document.createElement("span");
  error.className = "field-error";
  error.textContent = message;
  box.insertAdjacentElement("afterend", error);
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------login script----------------

const loginForm = document.querySelector(".login-form>form");
loginForm.addEventListener("submit", login);

function validateLoginFields(emailInput, passwordInput) {
  let valid = true;

  if (!emailInput.value.trim()) {
    setFieldError(emailInput, "Email is required.");
    valid = false;
  } else if (!EMAIL_PATTERN.test(emailInput.value.trim())) {
    setFieldError(emailInput, "Enter a valid email address.");
    valid = false;
  }

  if (!passwordInput.value) {
    setFieldError(passwordInput, "Password is required.");
    valid = false;
  } else if (passwordInput.value.length < 6) {
    setFieldError(passwordInput, "Password must be at least 6 characters.");
    valid = false;
  }

  return valid;
}

async function login(event) {
  event.preventDefault();
  clearFieldErrors(loginForm);

  const emailInput = document.querySelector(".login-email");
  const passwordInput = document.querySelector(".login-password");

  if (!validateLoginFields(emailInput, passwordInput)) {
    return;
  }

  try {
    let logdata = {
      email: emailInput.value.trim(),
      password: passwordInput.value,
    };

    let logurl = `http://localhost:4500/user/login`;

    let res = await fetch(logurl, {
      method: "POST",
      body: JSON.stringify(logdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    if (res.ok) {
      // Store login data matching the shape index.js reads from localStorage
      const userData = { message: "Login Sucessfull", token: data.token, user: data.user };
      localStorage.setItem("userdata", JSON.stringify(userData));
      localStorage.setItem("token", data.token);

      showToast(data.message || "Login successful!", "success");
      setTimeout(() => {
        window.location = "../index.html";
      }, 900);
    } else {
      showToast(data.message || "Login failed. Please try again.", "error");
    }
  } catch (err) {
    console.log("err", err);
    showToast("Unable to login right now. Please try again.", "error");
  }
}

// ---------------signup script----------------

const signupForm = document.querySelector(".signup-form>form");
signupForm.addEventListener("submit", register);

function validateSignupFields(nameInput, mobileInput, emailInput, passwordInput) {
  let valid = true;

  if (!nameInput.value.trim()) {
    setFieldError(nameInput, "Name is required.");
    valid = false;
  }

  if (!mobileInput.value.trim()) {
    setFieldError(mobileInput, "Mobile number is required.");
    valid = false;
  } else if (!/^\d{10}$/.test(mobileInput.value.trim())) {
    setFieldError(mobileInput, "Enter a valid 10-digit mobile number.");
    valid = false;
  }

  if (!emailInput.value.trim()) {
    setFieldError(emailInput, "Email is required.");
    valid = false;
  } else if (!EMAIL_PATTERN.test(emailInput.value.trim())) {
    setFieldError(emailInput, "Enter a valid email address.");
    valid = false;
  }

  if (!passwordInput.value) {
    setFieldError(passwordInput, "Password is required.");
    valid = false;
  } else if (passwordInput.value.length < 6) {
    setFieldError(passwordInput, "Password must be at least 6 characters.");
    valid = false;
  }

  return valid;
}

async function register(event) {
  event.preventDefault();
  clearFieldErrors(signupForm);

  const nameInput = document.querySelector(".signup-name");
  const mobileInput = document.querySelector(".signup-number");
  const emailInput = document.querySelector(".signup-email");
  const passwordInput = document.querySelector(".signup-password");

  if (!validateSignupFields(nameInput, mobileInput, emailInput, passwordInput)) {
    return;
  }

  try {
    let regdata = {
      name: nameInput.value.trim(),
      mobile: mobileInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value,
    };

    let regurl = "http://localhost:4500/user/signup";

    let res = await fetch(regurl, {
      method: "POST",
      body: JSON.stringify(regdata),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await res.json();

    if (res.ok) {
      showToast(data.message || "Signup completed! Please log in.", "success");
      signupForm.reset();
      document.getElementById("flip").checked = false;
    } else {
      showToast(data.message || "Signup failed. Please try again.", "error");
    }
  } catch (err) {
    console.log(err);
    showToast("Unable to sign up right now. Please try again.", "error");
  }
}
