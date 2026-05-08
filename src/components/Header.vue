<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <span class="logo-text">Celestine</span>
          <span class="logo-accent">Hosting</span>
        </router-link>

        <div class="nav-menu" :class="{ 'is-active': isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu">About</router-link>
          <router-link to="/services" class="nav-link" @click="closeMenu">Services</router-link>
          <router-link to="/pricing" class="nav-link" @click="closeMenu">Pricing</router-link>
          <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
        </div>

        <button class="mobile-menu-btn" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  color: #1a365d;
}

.logo-text {
  color: #2d3748;
}

.logo-accent {
  color: #4299e1;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #4299e1;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4299e1;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #4a5568;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.mobile-menu-btn.is-active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-menu-btn.is-active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.is-active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: white;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .nav-menu.is-active {
    transform: translateX(0);
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>