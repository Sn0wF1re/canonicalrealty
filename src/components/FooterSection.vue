<template>
  <section class="footer">
    <span></span>
    <footer>
      <h2>
        Logo
      </h2>
      <p>
        &copy {{ year }}/ Canonical Realty. All Rights Reserved.
      </p>
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const year = ref(null);
year.value = new Date().getFullYear(); 
</script>

<style scoped>
  .footer {
    background-color: #000;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2, p {
    color: #edf5e1;
  }

  @media (max-width: 850px) {
    footer {
      flex-direction: column;
    }

    .footer {
      padding-bottom: 2rem;
    }
  }
</style>