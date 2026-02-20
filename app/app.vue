<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <NuxtLink to="/" class="logo">我的網站</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">首頁</NuxtLink>
          <NuxtLink to="/about" class="nav-link">關於我</NuxtLink>
          <NuxtLink to="/firebase" class="nav-link">Firebase測試</NuxtLink>
        </div>
      </div>
    </nav>
    <main>
      <NuxtPage />
    </main>
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; 2026 我的網站. 使用 Nuxt 3 和 Capacitor 建立</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
// Firebase 配置已載入
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link.router-link-active {
  color: #667eea;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #667eea;
}

main {
  flex: 1;
}

.footer {
  background: #333;
  color: white;
  padding: 2rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1.5rem;
  }
}
</style>
