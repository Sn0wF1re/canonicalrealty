<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">
        <img src="/canonical_logo.png" alt="Canonical Realty Logo">
      </div>
      <nav>
        <ul>
          <li><a href="#hero">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <!-- <li><a href="#">Properties</a></li> -->
        </ul>
        <a href="#contact-us" class="btn btn-primary">Contact Us</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.container {
  background: #FFFFFF;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .logo img {
  height: 3rem;
  width: auto;
  font-size: 24px;
  font-weight: bold;
  color: #2E8B57;
}

.container nav {
  display: flex;
  align-items: center;
}

.container nav ul {
  list-style: none;
  display: flex;
}

.container nav ul li {
  margin-right: 20px;
  font-weight: bold;
}

.container nav ul li a {
  text-decoration: none;
  color: #333;
}

.btn-primary {
  /* background: #2E8B57; */
  background: #98FF98;
  /* color: white; */
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .navbar {
    display: none;
  }
}
</style>
