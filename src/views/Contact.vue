<template>
  <div class="contact">
    <div class="hero-section">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>
    </div>

    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>Email Support</h3>
            <p>support@celestinehosting.com</p>
            <p>We respond within 24 hours</p>
          </div>

          <div class="info-card">
            <div class="info-icon">📞</div>
            <h3>Phone Support</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri 9AM-6PM EST</p>
          </div>

          <div class="info-card">
            <div class="info-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available 24/7</p>
            <p>Instant responses</p>
          </div>

          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>Office Address</h3>
            <p>123 Hosting Street</p>
            <p>Tech City, TC 12345</p>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">Select a subject</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="sales">Sales Inquiry</option>
                <option value="general">General Question</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="6" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>

          <div v-if="submitted" class="success-message">
            Thank you for your message! We'll get back to you within 24 hours.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitted: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))

      this.isSubmitting = false
      this.submitted = true

      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitted = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem 0;
}

.hero-section {
  background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
  margin-bottom: 4rem;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.info-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  color: #1a365d;
  margin-bottom: 1rem;
}

.info-card p {
  color: #718096;
  margin-bottom: 0.5rem;
}

.contact-form {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  font-size: 2rem;
  color: #1a365d;
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4299e1;
}

.btn {
  width: 100%;
  padding: 1rem;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover:not(:disabled) {
  background: #3182ce;
}

.btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.success-message {
  margin-top: 2rem;
  padding: 1rem;
  background: #c6f6d5;
  color: #22543d;
  border-radius: 8px;
  text-align: center;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-form {
    padding: 2rem;
  }
}
</style>