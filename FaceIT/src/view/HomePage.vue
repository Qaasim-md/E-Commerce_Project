<template>
<div class="home-container">
<nav class="navbar">
    <div class="logo">FACE I.T</div>
    <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="cart.html">Cart</a></li>
    </ul>
    <div class="menu-toggle" id="mobile-menu">☰</div>
</nav>


    <h1>Facial Scanner Store</h1>
    <a href="product.html">Shop Now</a>
    <a href="login.html">Login</a>
    <a href="register.html">Register</a>

<footer class="footer">
    <div class="footer-container">

        <div class="footer-section">
            <h3>TechTrend</h3>
            <p>Your trusted online store for modern technology products at affordable prices.</p>
        </div>

        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@techtrend.com</p>
            <p>Phone: +27 12 345 6789</p>
            <p>Location: South Africa</p>
        </div>

        <div class="footer-section">
            <h4>Follow Us</h4>
            <div class="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </div>

    </div>

    <div class="footer-bottom">
        <p>© 2026 TechTrend. All Rights Reserved.</p>
    </div>
</footer>
</div>
</template>

<script>
export default {
  mounted() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}
</script>