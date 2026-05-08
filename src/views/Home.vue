<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Premium Web Hosting for
            <span class="hero-highlight">Modern Businesses</span>
          </h1>
          <p class="hero-subtitle">
            Experience lightning-fast, secure, and reliable hosting with Celestine Hosting.
            Scale your business with our enterprise-grade infrastructure and 24/7 support.
          </p>
          <div class="hero-buttons">
            <router-link to="/pricing" class="btn btn-primary">Get Started</router-link>
            <router-link to="/about" class="btn btn-secondary">Learn More</router-link>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-illustration">
            <div class="server-icon">🖥️</div>
            <div class="network-lines">
              <div class="line line-1"></div>
              <div class="line line-2"></div>
              <div class="line line-3"></div>
            </div>
            <div class="cloud-icon">☁️</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Celestine Hosting?</h2>
          <p>Discover the features that make us the preferred choice for businesses worldwide</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>SSD-powered servers with global CDN for blazing-fast loading speeds</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Advanced security measures including SSL certificates and DDoS protection</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>99.9% Uptime</h3>
            <p>Reliable infrastructure with guaranteed uptime and performance</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical support from our expert team</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Auto Scaling</h3>
            <p>Automatically scale resources based on your website traffic</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💾</div>
            <h3>Daily Backups</h3>
            <p>Automated daily backups to ensure your data is always safe</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime Guarantee</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50ms</div>
            <div class="stat-label">Average Response Time</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied customers who trust Celestine Hosting</p>
          <router-link to="/contact" class="btn btn-primary btn-large">Contact Us Today</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-highlight {
  color: #fbb6ce;
  position: relative;
}

.hero-highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 10px;
  background: rgba(251, 182, 206, 0.3);
  border-radius: 5px;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: white;
  color: #667eea;
  border: 2px solid white;
}

.btn-primary:hover {
  background: transparent;
  color: white;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.btn-large {
  padding: 1.25rem 3rem;
  font-size: 1.1rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-illustration {
  position: relative;
  width: 300px;
  height: 300px;
}

.server-icon {
  font-size: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 3s ease-in-out infinite;
}

.cloud-icon {
  font-size: 3rem;
  position: absolute;
  top: 20%;
  right: 20%;
  animation: float 4s ease-in-out infinite reverse;
}

.network-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.line {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.line-1 {
  width: 60px;
  height: 3px;
  top: 30%;
  left: 20%;
  animation: pulse 2s infinite;
}

.line-2 {
  width: 40px;
  height: 3px;
  top: 60%;
  right: 25%;
  animation: pulse 2.5s infinite;
}

.line-3 {
  width: 50px;
  height: 3px;
  bottom: 25%;
  left: 25%;
  animation: pulse 3s infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Features Section */
.features {
  padding: 6rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #1a365d;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #718096;
  line-height: 1.6;
}

/* Stats Section */
.stats {
  padding: 4rem 0;
  background: #1a365d;
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #4299e1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #e2e8f0;
}

/* CTA Section */
.cta {
  padding: 6rem 0;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: white;
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>