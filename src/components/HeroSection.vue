<template>
  <section id="hero" class="hero">
    <div class="overlay"></div>
    <div class="container">
      <h1>
        Maximize Your Property's Value with Canonical Realty - Your Trusted Experts in Valuation, Management & Sales.
      </h1>
      <p>
        Find out how much your property is worth today with our expert valuation services. Buy, sell, or manage properties effortlessly with our trusted guidance.
      </p>
      <div class="buttons">
        <a href="#contact-us" class="btn btn-primary">Get Started</a>
        <a href="#services" class="btn btn-secondary">Learn More</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: url('/moretowers.jpg') center/cover no-repeat;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.1)), rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.overlay {
  z-index: 1;
}

.container {
  z-index: 2;
}

h1, p {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btn-primary {
  /* background: #2E8B57; */
  background: #98FF98;
  /* color: white; */
  color: black;
}

.btn-secondary {
  background: white;
  /* background: black; */
  /* color: #2E8B57; */
  color: black;
}

@media (max-width: 768px) {
  .hero, .overlay {
    border-radius: 0;
  }
}
</style>