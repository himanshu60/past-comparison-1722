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


    let logurl = `https://clumsy-dove-tunic.cyclic.app/user/login`;

    let res = await fetch(logurl, {
      method: "POST",
      body: JSON.stringify(logdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    if (res.ok) {
      // Store the access token in the session storage
      console.log(data.user)
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
    alert(data.message);
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

        let regurl = "https://clumsy-dove-tunic.cyclic.app/user/signup";

        let res = await fetch(regurl, {
        method: "POST",
        body: JSON.stringify(regdata),
        headers: {
            "Content-type": "application/json",
        },
        });
        let data = await res.json();
        alert(data.message);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
    }
