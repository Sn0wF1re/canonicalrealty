<template>
  <section class="contact">
    <article>
      <h1>
        Get in Touch
      </h1>
      <p>
        We are here to answer any questions you may have. Contact us today!
      </p>
    </article>
    <article class="mobi">
      <div>
        <h3>Email</h3>
        <a>hello@canonicalrealty.com</a>
      </div>
      <div>
        <h3>Phone</h3>
        <a>+254711394893</a>
      </div>
      <div class="hidden">
        <h3>Office</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </article>
  </section>  
</template>

<script setup>
</script>

<style scoped>
  .contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    background-color: #000;
  }

  h1, h3 {
    /* color: #65ccb8; */
    color: #98ff98;
  }

  div {
    margin-bottom: 0.5rem;
  }
  .hidden {
    display: none;
  }

  @media (max-width: 850px) {
    .contact {
      display: flex;
      flex-direction: column;
      padding-bottom: 0;
    }

    .contact article {
      text-align: center;
      padding-bottom: 1.5rem;
    }
    .mobi {
      display: grid;
      grid-template-columns: repeat(2, 0.5fr);
    }

    .mobi div h3 {
      font-size: 16px;
    }

    .mobi div a {
      font-size: 13px;
    }
  }
</style>