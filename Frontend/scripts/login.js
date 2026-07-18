// ---------------login script----------------

document.querySelector(".login-form>form").addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  try {
    let email = document.querySelector(".login-email").value;
    let password = document.querySelector(".login-password").value;
    // let role = document.querySelector("#role").value;

    let logdata = {
        email,
      password
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
      localStorage.setItem('userdata', JSON.stringify(userData));
      localStorage.setItem('token', data.token);
    //   localStorage.setItem('user', JSON.stringify(data.user));
    //   localStorage.setItem('role', role);
    //   localStorage.setItem('userName', data.user.name);

      alert(data.message);
      window.location = "../index.html";
    } else {
      alert(data.message);
    }

  } catch (err) {
    console.log("err", err);
    alert("Unable to login right now. Please try again.");
  }
}

// ---------------signup script----------------

document.querySelector(".signup-form>form").addEventListener("submit", register);
    

    async function register(event) {
    event.preventDefault();
    console.log("4145")
    try {
        let name = document.querySelector(".signup-name").value;
        let mobile = document.querySelector(".signup-number").value;
        let email = document.querySelector(".signup-email").value;
        let password = document.querySelector(".signup-password").value;

        let regdata = {
        name,
        mobile,
        email,
        password,
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
        alert(data.message || "Signup completed");
        console.log(data);

    } catch (err) {
        console.log(err);
    }
    }
