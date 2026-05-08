<template>
  <div class="about">
    <div class="hero-section">
      <div class="container">
        <h1>About Celestine Hosting</h1>
        <p>Leading the way in web hosting innovation since 2020</p>
      </div>
    </div>

    <div class="container">
      <section class="story">
        <h2>Our Story</h2>
        <p>Celestine Hosting was founded with a simple mission: to provide exceptional web hosting services that empower businesses to succeed online. We believe that reliable hosting shouldn't be complicated or expensive.</p>
        <p>Our team of experts has over 15 years of combined experience in web infrastructure, security, and customer service. We've built our platform from the ground up to deliver the performance and reliability that modern businesses demand.</p>
      </section>

      <section class="values">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Reliability</h3>
            <p>We guarantee 99.9% uptime and provide enterprise-grade infrastructure to keep your website running smoothly.</p>
          </div>
          <div class="value-card">
            <h3>Security</h3>
            <p>Your data security is our top priority. We implement multiple layers of protection to safeguard your information.</p>
          </div>
          <div class="value-card">
            <h3>Support</h3>
            <p>Our 24/7 support team is always ready to help you with any questions or issues you may encounter.</p>
          </div>
          <div class="value-card">
            <h3>Innovation</h3>
            <p>We continuously invest in the latest technologies to provide you with cutting-edge hosting solutions.</p>
          </div>
        </div>
      </section>

      <section class="team">
        <h2>Our Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">👨‍💼</div>
            <h4>John Smith</h4>
            <p>CEO & Founder</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👩‍💻</div>
            <h4>Sarah Johnson</h4>
            <p>CTO</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👨‍🔧</div>
            <h4>Mike Davis</h4>
            <p>Head of Infrastructure</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👩‍💼</div>
            <h4>Emily Chen</h4>
            <p>Customer Success Manager</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 2rem 0;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

section {
  margin-bottom: 4rem;
}

section h2 {
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 2rem;
  text-align: center;
}

section p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.value-card h3 {
  color: #1a365d;
  margin-bottom: 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  text-align: center;
}

.member-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.team-member h4 {
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #718096;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>