<template>
  <div class="pricing">
    <div class="hero-section">
      <div class="container">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the perfect plan for your needs</p>
      </div>
    </div>

    <div class="container">
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="card-header">
            <h3>Starter</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">2.99</span>
              <span class="period">/mo</span>
            </div>
          </div>
          <ul class="features">
            <li>1 Website</li>
            <li>10GB SSD Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>Free SSL Certificate</li>
            <li>cPanel Control Panel</li>
            <li>Email Support</li>
          </ul>
          <router-link to="/contact" class="btn btn-primary">Get Started</router-link>
        </div>

        <div class="pricing-card featured">
          <div class="card-header">
            <h3>Professional</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">9.99</span>
              <span class="period">/mo</span>
            </div>
            <div class="badge">Most Popular</div>
          </div>
          <ul class="features">
            <li>5 Websites</li>
            <li>50GB SSD Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>Free SSL Certificate</li>
            <li>cPanel Control Panel</li>
            <li>Priority Support</li>
            <li>Daily Backups</li>
          </ul>
          <router-link to="/contact" class="btn btn-primary">Get Started</router-link>
        </div>

        <div class="pricing-card">
          <div class="card-header">
            <h3>Enterprise</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">19.99</span>
              <span class="period">/mo</span>
            </div>
          </div>
          <ul class="features">
            <li>Unlimited Websites</li>
            <li>200GB SSD Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>Free SSL Certificate</li>
            <li>cPanel Control Panel</li>
            <li>24/7 Phone Support</li>
            <li>Daily Backups</li>
            <li>Advanced Security</li>
          </ul>
          <router-link to="/contact" class="btn btn-primary">Get Started</router-link>
        </div>
      </div>

      <div class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h4>Can I upgrade my plan anytime?</h4>
            <p>Yes, you can upgrade your hosting plan at any time. The upgrade will be prorated and applied to your next billing cycle.</p>
          </div>
          <div class="faq-item">
            <h4>Do you offer a money-back guarantee?</h4>
            <p>We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied, we'll refund your payment.</p>
          </div>
          <div class="faq-item">
            <h4>Is there a setup fee?</h4>
            <p>No, there are no setup fees for any of our hosting plans. You only pay the monthly subscription fee.</p>
          </div>
          <div class="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and bank transfers for your convenience.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing'
}
</script>

<style scoped>
.pricing {
  padding: 2rem 0;
}

.hero-section {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

.pricing-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.pricing-card.featured {
  border: 3px solid #4299e1;
  transform: scale(1.05);
}

.card-header {
  padding: 2rem;
  text-align: center;
  background: #f8fafc;
}

.card-header h3 {
  font-size: 1.5rem;
  color: #1a365d;
  margin-bottom: 1rem;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1rem;
}

.currency {
  font-size: 1.5rem;
  color: #718096;
}

.amount {
  font-size: 3rem;
  font-weight: 800;
  color: #1a365d;
}

.period {
  font-size: 1.2rem;
  color: #718096;
  margin-left: 0.25rem;
}

.badge {
  background: #4299e1;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-top: 0.5rem;
}

.features {
  list-style: none;
  padding: 2rem;
  margin: 0;
}

.features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
}

.features li:last-child {
  border-bottom: none;
}

.btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: #4299e1;
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  border-radius: 0 0 16px 16px;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #3182ce;
}

.faq-section {
  text-align: center;
}

.faq-section h2 {
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 3rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.faq-item h4 {
  color: #1a365d;
  margin-bottom: 1rem;
}

.faq-item p {
  color: #718096;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: none;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>