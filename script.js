// ---------------- CART ----------------

let cart = localStorage.getItem("cartCount") || 0;

const count = document.getElementById("count");

if (count) {
    count.innerText = cart;
}

function addCart() {
    cart++;
    localStorage.setItem("cartCount", cart);

    if (count) {
        count.innerText = cart;
    }

    showToast("✅ Product Added to Cart");
}

// ---------------- SEARCH ----------------

function searchProducts() {

    let searchBox = document.getElementById("search");

    if (!searchBox) return;

    let input = searchBox.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// ---------------- MOBILE MENU ----------------

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
    menu.onclick = function () {
        nav.classList.toggle("active");
    };
}

// ---------------- DARK MODE ----------------

const theme = document.getElementById("theme");

if (theme) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        theme.innerHTML = "☀️";
    }

    theme.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            theme.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            theme.innerHTML = "🌙";
        }

    };
}

// ---------------- TOAST ----------------

function showToast(message) {

    let toast = document.createElement("div");

    toast.innerHTML = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#28a745";
    toast.style.color = "#fff";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    toast.style.fontSize = "16px";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);

}
const paymentRoutes=require("./routes/paymentRoutes");

app.use("/api/payment",paymentRoutes);
key: "YOUR_RAZORPAY_KEY_ID"