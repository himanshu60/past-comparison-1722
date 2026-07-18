
let baseurl = "http://localhost:4500";
let arr = [];
const container = document.querySelector(".container");

setupAuthNav();
fetchdata();

function setupAuthNav() {
    const loginLink = document.querySelector('a[href="./login.html"]');
    if (!loginLink) return;

    const stored = JSON.parse(localStorage.getItem("userdata") || "null");
    const token = localStorage.getItem("token") || (stored && stored.token);

    if (token) {
        loginLink.textContent = "Logout";
        loginLink.href = "#";
        loginLink.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("userdata");
            localStorage.removeItem("token");
            window.location.href = "../index.html";
        });
    }
}

async function fetchdata() {
    try {
        let res = await fetch(`${baseurl}/styles/female`);
        let data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to load women's styles");
        }

        arr = Array.isArray(data) ? data : [];
        if (!arr.length) {
            showMessage("No women's services available right now.");
            return;
        }
        renderCard(arr);
    } catch (err) {
        console.log(err);
        showMessage("Unable to load women's services. Please try again.");
    }
}

function showMessage(message) {
    container.innerHTML = `<p style="color:#fff;text-align:center;padding:20px;">${message}</p>`;
}

function renderCard(data) {
    container.innerHTML = "";

    data.forEach((ele) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let imagediv = document.createElement("div");
        imagediv.setAttribute("class", "image");

        let img = document.createElement("img");
        img.setAttribute("src", ele.image);
        img.setAttribute("href", "#");

        let content = document.createElement("div");
        content.setAttribute("class", "content");

        let name = document.createElement("h3");
        name.textContent = ele.name;
        name.setAttribute("id", `${ele.name}`);

        let price = document.createElement("p");
        price.textContent = `Price:₹${ele.price}`;
        price.setAttribute("id", `price`);

        let description = document.createElement("p");
        description.textContent = ele.description;
        description.setAttribute("class", "description");

        let button = document.createElement("button");
        button.textContent = "Book";
        button.setAttribute("id", "Book");

        button.addEventListener("click", function () {
            localStorage.setItem("style_id", JSON.stringify(ele._id));
            window.location = "./time_styler.html";
        });

        imagediv.append(img);
        content.append(name, price, description, button);
        card.append(imagediv, content);

        container.append(card);
    });
}