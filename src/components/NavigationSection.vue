<template>
  <section class="nav">
    <nav class="desktop-nav" v-show="!mobileMenuVisible">
      <h1>
        Logo
      </h1>
      <ul>
        <li>
          About Us
        </li>
        <li>
          Services
        </li>
        <li>
          Properties
        </li>
      </ul>
      <button>
        Contact Us
      </button>
    </nav>
  
    <div class="mobile-toggle" @click="toggleMobileMenu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  
    <nav class="mobile-nav" v-show="mobileMenuVisible">
      <ul>
        <li>
          About Us
        </li>
        <li>
          Services
        </li>
        <li>
          Properties
        </li>
      </ul>
      <button>
      Contact Us
    </button>
    </nav>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuVisible = ref(false);

const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value;
  // set class
  const mobileToggle = document.querySelector('.mobile-toggle');
  mobileToggle.classList.toggle('mobile-toggle-active');
};
</script>

<style scoped>
  .nav {
  /* padding-top: 1rem;
    padding-bottom: 1rem; */
    padding: 1.2rem 4rem;
    /* background-color: #65ccb8; */
    background-color: #98ff98;
  }
  .desktop-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    min-width: 50%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    color: #4682b4;
    font-weight: bold;
  }

  h1 {
    color: #4682b4;
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 850px) {
    .nav {
      display: grid;
      grid-template-columns: repeat(2, 0.45fr);
      padding: 1.2rem 2rem;
    }

    .desktop-nav {
      display: none;
    }

    .line {
      width: 30px;
      height: 3px;
      background: #4682b4;
      margin: 6px 0;
      transition: transform 0.2s, opacity 0.2s;
    }

    /* Mobile navigation menu styles */

    .mobile-toggle-active .line:nth-child(1) {
      transform: rotate(-45deg) translate(-9px, 12px);
    }

    .mobile-toggle-active .line:nth-child(2) {
      opacity: 0;
    }

    .mobile-toggle-active .line:nth-child(3) {
      transform: rotate(45deg) translate(-9px, -12px);
    }

    .mobile-nav {
      display: flex;
      flex-direction: column;
    }

    .mobile-nav ul {
      display: flex;
      flex-direction: column;
    }

    .mobile-nav ul li {
      padding-bottom: 0.25rem;
    }
    .mobile-toggle {
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
  }
</style>