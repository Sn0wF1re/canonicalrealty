<template>
  <section class="services">
    <div class="services-header">
      <h2>
        Discover the Value of Your Property with our Expert Valuation Services
      </h2>

      <p>
        We offer a wide range of services to meet your property needs;
        from valuations to market analysis.
      </p>
    </div>

    <div class="all-services">
      <article>
        <!-- <img src="/chart-line-1-svgrepo-com.svg"> -->
        <img src="/pie-chart.png">
        <h2>
          Stay Ahead of the Market with our Comprehensive Market Analysis
        </h2>
        <p>
          At Canonical Realty, we offer a wide range of services to meet your property needs. From property valuation to market analysis and feasibility studies, we have you covered.
        </p>
        <!-- <button class="btn-white">Learn More ></button> -->
      </article>
      <article>
        <!-- <img src="/investment-insurance-svgrepo-com.svg"> -->
        <img src="/coin.png">
        <h2>
          Unlock Lucrative Investment Opportunities with our Expert Guidance
        </h2>
        <p>
          Invest with confidence with the help of our experienced team. We provide valuable insights and guidance to help you make informed investment decisions.
        </p>
        <!-- <button class="btn-white">Sign up ></button> -->
      </article>
      <article>
        <!-- <img src="/real-estate-house-key-svgrepo-com.svg"> -->
        <img src="/caret_circle_right.png">

        <h2>
          Maximize Your Property's Potential with our Professional Services
        </h2>
        <p>
          Whether you're looking to sell, rent, or improve your property, our team of experts is here to assist you every step of the way.
        </p>
      </article>
    </div>
    <!-- <button class="button">Contact us ></button> -->
  </section>
</template>

<script setup>
</script>

<style scoped>
  .services {
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* background-color: #65ccb8;
    background-color: #00ff7f;
    background-color: #32cd32;
    background-color: #98ff98; */
  }

  .services-header {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 70%;
    margin-bottom: 1rem;
    h2 {
      margin-bottom: 1rem;
      /* color: #5cdb95; */
      /* color: #edf5e1; */
      color: #082108;
      font-weight: bold;
      font-size: 2rem;
    }
  }

  .all-services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.5rem;
    margin-bottom: 2rem;

    article {
      /* background-color: #effbef; */
      border: 1px solid #c2f0c2;
      border-radius: 0.5rem;
      padding: 1rem;

      h2 {
        color: #082108;
        font-size: 1rem;
        line-height: 1.5rem;
      }

      p {
        color: #2db42d;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }


  article {
    max-width: 1fr;
  }

  img {
    height: 3rem;
    width: auto;
    padding-bottom: 2rem;
  }

  h2, p {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem;
    width: 6rem;
  }

  @media (max-width: 850px) {
    .all-services {
      display: flex;
      flex-direction: column;
    }
  }
</style>
