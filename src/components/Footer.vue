<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Celestine Hosting</h3>
          <p>Premium web hosting solutions for modern businesses. Fast, secure, and reliable hosting that scales with your needs.</p>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <router-link to="/about" class="footer-link">About Us</router-link>
          <router-link to="/services" class="footer-link">Services</router-link>
          <router-link to="/pricing" class="footer-link">Pricing</router-link>
          <router-link to="/contact" class="footer-link">Contact</router-link>
        </div>

        <div class="footer-section">
          <h4>Services</h4>
          <a href="#" class="footer-link">Shared Hosting</a>
          <a href="#" class="footer-link">VPS Hosting</a>
          <a href="#" class="footer-link">Dedicated Servers</a>
          <a href="#" class="footer-link">Domain Registration</a>
        </div>

        <div class="footer-section">
          <h4>Support</h4>
          <a href="#" class="footer-link">Help Center</a>
          <a href="#" class="footer-link">Knowledge Base</a>
          <a href="#" class="footer-link">Status Page</a>
          <a href="#" class="footer-link">Contact Support</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Celestine Hosting. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#" class="footer-bottom-link">Privacy Policy</a>
          <a href="#" class="footer-bottom-link">Terms of Service</a>
          <a href="#" class="footer-bottom-link">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #1a365d;
  color: white;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #4299e1;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.footer-section h4 {
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section p {
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #4299e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #63b3ed;
}

.footer-link {
  display: block;
  color: #a0aec0;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #4299e1;
}

.footer-bottom {
  border-top: 1px solid #2d3748;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #a0aec0;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-link {
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #4299e1;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }
}
</style>