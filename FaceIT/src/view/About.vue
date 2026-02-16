<template>
  <div>
    <nav class="navbar">
      <div class="logo">TechTrend</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about" class="active">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
      <div class="menu-toggle" id="mobile-menu">☰</div>
    </nav>

    <div class="about-container">
      <h1>About Us</h1>
      <p>TechTrend is an innovative e-commerce platform offering affordable and modern technology products.</p>
    </div>
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

<style scoped>
@import "navbar.css";
@import "about.css";
</style>

