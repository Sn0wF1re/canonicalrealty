<template>
  <section class="hero">
    <article>
      <h1>
        Welcome to Canonical Realty - Your Trusted Valuation, Property Management, and Estate Agency
      </h1>
      <p>
        We provide accurate and reliable property valuation services to help you make informed decisions.
      </p>
    </article>
    <div class="buttons">
      <button>
        Get Started
      </button>
      <button class="btn-white">
        Learn More
      </button>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
  .hero {
    /* background-color: #65ccb8; */
    background-image: url('/moretowers.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 1rem;
    padding-bottom: 12.6rem;
  }

  article {
    max-width: 20rem;
    padding-top: 12.6rem;
  }
  
  h1 {
    color: #98ff98;
  }

  h1, p {
    margin-bottom: 1rem;
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 6rem);
    gap: 1rem;
  }
</style>