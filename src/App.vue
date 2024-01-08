<script setup>
import NavigationSection from './components/NavigationSection.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div>
    <NavigationSection />
    <HeroSection />
    <ServicesSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    color: #edf5e1;
    /* margin: 2.5rem 6.25rem; */
    font-family: 'Instrument Sans', sans-serif;
  }

  .hero, .services, .contact, .footer {
    padding: 3rem 4rem;
  }
  /* h1, h2 {
    color: #65ccb8;
    color: #f0f0f0;
    color: #000;
  } */

  p {
    /* color: #5cdb95; */
    color: #edf5e1;
  }

  button {
    background-color: #4682b4;
    color: #fff;
    border: 0;
    padding: 0.5rem;
    cursor: pointer;
    width: 6rem;
  }
  .btn-white {
  background-color: #fff;
  color: #000;
  border: 1px solid #fff;
  }

  .btn-green {
    background-color: #00ff7f;
    color: #000;
  }

  @media (max-width: 850px) {
    .hero, .services, .contact, .footer {
    padding: 3rem 2rem;
  }
  }
</style>
