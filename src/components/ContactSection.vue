<template>
  <section class="contact" id="contact-us">
    <div class="container">
      <!-- <h2>Get in Touch</h2> -->
      <div class="contact-grid">
        <form @submit.prevent="sendEmail">
          <input v-model="name" type="text" autocomplete="on" id="name" placeholder="Your Name" required>
          <span v-if="errors.name" class="error">{{ errors.name }}</span>

          <input v-model="email" type="email" autocomplete="on" id="email" placeholder="Your Email" required>
          <span v-if="errors.email" class="error">{{ errors.email }}</span>

          <textarea v-model="message" id="message" placeholder="Your Message" required></textarea>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>

          <button :disabled="loading" type="submit" class="btn btn-primary">
            {{ loading ? "Sending..." : "Send Email" }}
          </button>
        </form>

        <!-- Success Message -->
        <p v-if="successMessage" class="success">{{ successMessage }}</p>

        <div class="contact-info">
          <p>Email: <a href="mailto:info@canonicalrealty.com">info@canonicalrealty.com</a></p>
          <p>Phone: +254 712 244 494</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const name = ref("");
const email = ref("");
const message = ref("");
const errors = ref({});
const successMessage = ref("");
const loading = ref(false);

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!name.value) {
    errors.value.name = "Name is required.";
    isValid = false;
  }
  if (!email.value) {
    errors.value.email = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = "Invalid email format.";
    isValid = false;
  }
  if (!message.value) {
    errors.value.message = "Message cannot be empty.";
    isValid = false;
  }

  return isValid;
};

const sendEmail = async () => {
  if (!validateForm()) return;

  loading.value = true;

  const templateParams = {
    user_name: name.value,
    user_email: email.value,
    user_message: message.value,
  };

  try {
    await emailjs.send(
      'contact_service',
      'contact_form',
      templateParams,
      {
        publicKey: 'dspYnCBNU8O9RdF0j'
      }
    );

    successMessage.value = "Your message has been sent successfully!";
    setTimeout(() => {
      successMessage.value = "";
    }, 3000);

    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    console.error("Failed to send email:", error);
  } finally {
    loading.value = false;
  }
};
</script>

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

.error {
  color: red;
  font-size: 0.9rem;
}

.success {
  color: green;
  font-size: 1rem;
  margin-top: 10px;
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  /* background: #2E8B57; */
  background: #98FF98;
  /* color: white; */
  color: black;
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
