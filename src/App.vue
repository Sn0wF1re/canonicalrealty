<template>
  <div>
    <NavigationSection />
    <HeroSection />
    <ServicesSection />
    <CTASection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavigationSection from './components/NavigationSection.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import CTASection from './components/CTASection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { onMounted } from 'vue'

const addGoogleAnalytics = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-WXVJNCHQ6S`;
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-WXVJNCHQ6S'); // Google Analytics ID
},

const addGoogleTagManager = () => {
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBHJ3QLL" 
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(noscript)
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TBHJ3QLL');
  `;
  document.head.appendChild(script);
};

onMounted(() => {
  addGoogleAnalytics()
  addGoogleTagManager()
});
</script>

<!-- <style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    background-color: #effbef;
    /* color: #edf5e1; */
    color: #082108;
    /* margin: 2.5rem 6.25rem; */
    font-family: 'Instrument Sans', sans-serif;
  }

  .hero {
    margin: 2rem 6rem;
    padding: 3rem 4rem;
  }

  .services, .contact, .footer {
    margin: 2rem;
    padding: 3rem 4rem;
  }
  /* h1, h2 {
    color: #65ccb8;
    color: #f0f0f0;
    color: #000;
    color: #082108;
  } */

  p {
    /* color: #5cdb95; */
    /* color: #edf5e1; */
    color: #2db42d;
  }

  button {
    border: 0;
    border-radius: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    width: 6rem;
    font-weight: bold;
  }
  /* .btn-white {
  background-color: #fff;
  color: #000;
  border: 1px solid #fff;
  }

  .btn-green {
    background-color: #00ff7f;
    color: #000;
  } */

  @media (max-width: 850px) {
    .hero, .services, .contact, .footer {
    padding: 3rem 2rem;
  }
  }
</style> -->
