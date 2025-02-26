<template>
  <section class="contact">
    <article class="header">
      <h1>
        Get in Touch
      </h1>
      <p>
        We are here to answer any questions you may have. Contact us today!
      </p>
    </article>
    <article class="comms">
      <div class="email">
        <h3>Email</h3>
        <a>hello@canonicalrealty.com</a>
      </div>
      <div class="phone">
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
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem; */
    /* background-color: #000; */
    .header {
      text-align: center;
      padding-bottom: 1.5rem;

      h1 {
        font-size: 2rem;
      }
    }

    .comms {
      display: flex;
      justify-content: center;
      gap: 2rem;

      .email, .phone {
        display: flex;
        flex-direction: column;

        h3 {
          text-align: center;
        }

        a {
          color: #2db42d;
        }
      }
    }
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
    .comms {
      display: grid;
      grid-template-columns: repeat(2, 0.5fr);
    }

    .comms div h3 {
      font-size: 16px;
    }

    .comms div a {
      font-size: 13px;
    }
  }
</style>