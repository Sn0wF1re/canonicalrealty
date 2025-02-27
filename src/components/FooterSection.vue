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
  background: #2E8B57;
  text-align: center;
  color: white;
  padding: 20px 0;
}
</style>
