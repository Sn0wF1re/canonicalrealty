<template>
  <footer>
    <div class="container">
      <p>&copy; {{year}}/ Canonical Realty. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
  /* background: #2E8B57; */
  background: #98FF98;
  text-align: center;
  /* color: white; */
  color: black;
  padding: 20px 0;
}
</style>
