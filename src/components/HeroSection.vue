<template>
  <section class="hero">
    <article>
      <h2>
        Welcome to Canonical Realty
      </h2>
      <p>
        Your Trusted Valuation, Property Management, and Estate Agency.
        We provide accurate and reliable property valuation services to help you make informed decisions.
      </p>
    </article>
    <div class="buttons">
      <button class="btn-lime">
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/moretowers.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
  }

  article {
    padding-top: 12.6rem;
    text-align: center;

    h2 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    h2, p {
      color: #edf5e1;
      margin-bottom: 1rem;
    }
  }
  

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 6rem);
    gap: 1rem;

    .btn-lime {
      background-color: #98ff98;
    }
  }
</style>