<template>
  <div class="services">
    <div class="hero-section">
      <div class="container">
        <h1>Our Services</h1>
        <p>Comprehensive hosting solutions for every need</p>
      </div>
    </div>

    <div class="container">
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🌐</div>
          <h3>Shared Hosting</h3>
          <p>Perfect for small websites and blogs. Affordable and easy to use.</p>
          <ul>
            <li>10GB SSD Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>Free SSL Certificate</li>
            <li>cPanel Control Panel</li>
          </ul>
          <div class="price">Starting at $2.99/mo</div>
        </div>

        <div class="service-card featured">
          <div class="service-icon">🚀</div>
          <h3>VPS Hosting</h3>
          <p>Dedicated resources for growing businesses and high-traffic sites.</p>
          <ul>
            <li>2GB RAM</li>
            <li>1 CPU Core</li>
            <li>50GB SSD Storage</li>
            <li>Root Access</li>
          </ul>
          <div class="price">Starting at $9.99/mo</div>
        </div>

        <div class="service-card">
          <div class="service-icon">🖥️</div>
          <h3>Dedicated Servers</h3>
          <p>Full server control for enterprise applications and heavy workloads.</p>
          <ul>
            <li>16GB RAM</li>
            <li>4 CPU Cores</li>
            <li>500GB SSD Storage</li>
            <li>Full Root Access</li>
          </ul>
          <div class="price">Starting at $49.99/mo</div>
        </div>

        <div class="service-card">
          <div class="service-icon">☁️</div>
          <h3>Cloud Hosting</h3>
          <p>Scalable cloud infrastructure for modern web applications.</p>
          <ul>
            <li>Auto Scaling</li>
            <li>Load Balancing</li>
            <li>Global CDN</li>
            <li>99.9% Uptime SLA</li>
          </ul>
          <div class="price">Starting at $14.99/mo</div>
        </div>

        <div class="service-card">
          <div class="service-icon">🔒</div>
          <h3>SSL Certificates</h3>
          <p>Secure your website with industry-standard SSL encryption.</p>
          <ul>
            <li>Domain Validation</li>
            <li>256-bit Encryption</li>
            <li>Trust Seals</li>
            <li>Free Installation</li>
          </ul>
          <div class="price">Starting at $9.99/yr</div>
        </div>

        <div class="service-card">
          <div class="service-icon">📧</div>
          <h3>Email Hosting</h3>
          <p>Professional email hosting with your domain name.</p>
          <ul>
            <li>Unlimited Email Accounts</li>
            <li>Webmail Access</li>
            <li>Spam Protection</li>
            <li>IMAP/POP3/SMTP</li>
          </ul>
          <div class="price">Starting at $4.99/mo</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.services {
  padding: 2rem 0;
}

.hero-section {
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-card.featured {
  border: 3px solid #4299e1;
  transform: scale(1.05);
}

.service-card.featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  color: #1a365d;
  margin-bottom: 1rem;
}

.service-card p {
  color: #718096;
  margin-bottom: 1.5rem;
}

.service-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.service-card li {
  color: #4a5568;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.service-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #48bb78;
  font-weight: bold;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4299e1;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card.featured {
    transform: none;
  }
}
</style>