<template>
  <section class="footer">
    <span></span>
    <footer>
      <img src="/canonical_logo.png" alt="Logo" />
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
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: #2db42d;
  }

  img {
    height: 3rem;
    width: auto;
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