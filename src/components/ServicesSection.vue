<template>
  <section class="services">
    <div class="container">
      <h2>
        Expert Property Valuation & Market Insights
        to Help You Invest Smarter!
      </h2>
      <p>
        Unlock the true potential of your property
        with our professional valuation services.
        Whether you're selling, buying, or managing real estate,
        our team provides accurate insights
        to help you make profitable decisions.
      </p>
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <img class="service-image" :src="service.image" alt="Service Image" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { image: "/pie-chart.png", title: "Comprehensive Market Analysis", description: "Leverage data-driven insights to stay ahead of market trends. Our expert analysis helps you price, buy, or sell properties strategically for maximum returns." },
  { image: "/coin.png", title: "Investment & Growth Strategies", description: "Leverage data-driven insights to stay ahead of market trends. Our expert analysis helps you price, buy, or sell properties strategically for maximum returns." },
  { image: "/caret_circle_right.png", title: "Property Optimization", description: "Boost your property's market appeal with expert recommendations on renovations, staging, and strategic improvements for higher resale or rental value." }
]
</script>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #EFFBEF;
  padding: 60px 0;
}

.container {
  h2, p {
    max-width: 780px;
    margin: 0 auto;
  }

  h2 {
    padding: 1px;
  }
}

.services-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
}

.service-card {
  background: #FFFFFF;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(46, 139, 87, 0.2);
}

.service-image {
  height: 3rem;
  width: auto;
}

@media (max-width: 768px) {
  .services-grid {
    flex-direction: column;
  }
}
</style>
