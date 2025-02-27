<template>
  <section class="contact">
    <div class="container">
      <!-- <h2>Get in Touch</h2> -->
      <div class="contact-grid">
        <form>
          <input type="text" autocomplete="on" id="name" placeholder="Your Name" required>
          <input type="email" autocomplete="on" id="email" placeholder="Your Email" required>
          <textarea id="message" placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
        <div class="contact-info">
          <p>Email: <a href="mailto:hello@canonicalrealty.com">hello@canonicalrealty.com</a></p>
          <p>Phone: +254 711 394 893</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: #F5F5F5;
  padding: 60px 0;
}

.contact-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
}

.contact-grid form {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

input, textarea {
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid black;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
}

textarea {
  height: 150px;
  resize: none;
}

.btn-primary {
  background: #2E8B57;
  color: white;
  border: none;
}

@media (max-width: 768px) {
  .contact {
    padding: 40px 0;
  }

  .contact-grid {
    flex-direction: column;
  }

  .contact-grid form {
    width: 80%;
  }
}
</style>
