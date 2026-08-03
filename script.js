// Welcome Message

function welcome() {
    alert("🍔 Welcome to ByteBites!\nEnjoy your meal 😊");
}

// ---------------- SEARCH ----------------

const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    let found = false;

    cards.forEach(function (card) {

        let food = card.innerText.toLowerCase();

        if (food.includes(value)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    document.getElementById("noResult").style.display =
        found ? "none" : "block";

});

// ---------------- FILTER ----------------

function filterMenu(category) {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        if (category === "all") {

            card.style.display = "block";

        }

        else if (card.classList.contains(category)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}

// ---------------- SHOPPING CART ----------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

    alert(name + " added to cart 🛒");

}

function updateCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function (item) {

        let li = document.createElement("li");

        li.innerHTML = item.name + " - ₹" + item.price;

        cartItems.appendChild(li);

        total += item.price;

    });

    document.getElementById("cartCount").innerHTML = cart.length;

    document.getElementById("total").innerHTML = total;

}

// ---------------- CLEAR CART ----------------

function clearCart() {

    if (confirm("Clear the shopping cart?")) {

        cart = [];

        localStorage.removeItem("cart");

        updateCart();

    }

}

// ---------------- CHECKOUT ----------------

function checkout() {

    if (cart.length === 0) {

        alert("🛒 Your cart is empty!");

        return;

    }

    alert("🎉 Order Successful!\n\nThank you for ordering from ByteBites ❤️");

    cart = [];

    localStorage.removeItem("cart");

    updateCart();

}

// ---------------- FAVOURITES ----------------

let hearts = document.querySelectorAll(".favourite");

hearts.forEach(function (heart, index) {

    if (localStorage.getItem("fav" + index)) {

        heart.classList.add("active");

    }

    heart.addEventListener("click", function () {

        heart.classList.toggle("active");

        if (heart.classList.contains("active")) {

            localStorage.setItem("fav" + index, "true");

        } else {

            localStorage.removeItem("fav" + index);

        }

    });

});
