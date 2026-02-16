<template>
<div>
<head>
    <meta charset="UTF-8">
    <title>FACE I.T | Products</title>
    <link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="products.css">
</head>
<body>
<nav class="navbar">
    <div class="logo">TechTrend</div>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="products.html" class="active">Products</a></li>
        <li><a href="cart.html">Cart</a></li>
    </ul>
    <div class="menu-toggle" id="mobile-menu">☰</div>
</nav>

<h1>Our Products</h1>
<div id="productList"></div>

<script>
fetch("/products")
.then(res => res.json())
.then(data => {
    let output = "";
    data.forEach(product => {
        output += `
<div class="product-card">
    <img src="${product.image}" width="100">
    <h3>${product.name}</h3>
    <p>R${product.price}</p>
    <button onclick="addToCart('${product.name}', ${product.price})">
        Add to Cart
    </button>
</div>`;

    });
    document.getElementById("productList").innerHTML = output;
});

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}

</script>

</body>
</div>
</template>


