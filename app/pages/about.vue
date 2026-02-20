<template>
  <div class="about-page">
    <div class="container">
      <header class="page-header">
        <NuxtLink to="/" class="back-link">← 返回首頁</NuxtLink>
        <h1 class="page-title">關於我</h1>
      </header>

      <div class="content">
        <section class="profile-section">
          <div class="profile-image">
            <div class="avatar">👤</div>
          </div>
          <div class="profile-info">
            <h2>個人簡介</h2>
            <p>
              你好！我是一名全端開發者，專注於使用現代化的技術棧來建立優秀的網路應用程式。
              我熱衷於學習新技術，並將它們應用到實際專案中。
            </p>
          </div>
        </section>

        <section class="skills-section">
          <h2>技能專長</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <h3>前端開發</h3>
              <ul>
                <li>Vue.js / Nuxt.js</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML / CSS</li>
              </ul>
            </div>
            <div class="skill-item">
              <h3>移動端開發</h3>
              <ul>
                <li>Capacitor</li>
                <li>iOS / Android</li>
                <li>跨平台開發</li>
              </ul>
            </div>
            <div class="skill-item">
              <h3>後端與部署</h3>
              <ul>
                <li>Firebase</li>
                <li>Vercel</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="contact-section">
          <h2>聯絡方式</h2>
          <div class="contact-info">
            <p>如果你有任何問題或合作機會，歡迎與我聯繫！</p>
            <div class="contact-buttons">
              <a href="mailto:your.email@example.com" class="contact-btn">
                📧 Email
              </a>
              <a href="https://github.com" target="_blank" class="contact-btn">
                💻 GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '關於我',
  meta: [
    { name: 'description', content: '了解更多關於我的資訊' }
  ]
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 3rem;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #764ba2;
}

.page-title {
  font-size: 3rem;
  color: #333;
  margin-top: 1rem;
}

.content {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.profile-section {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid #f0f0f0;
}

.profile-image {
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
}

.profile-info h2 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.profile-info p {
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
}

.skills-section {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid #f0f0f0;
}

.skills-section h2 {
  color: #667eea;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.skill-item h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.skill-item ul {
  list-style: none;
  padding: 0;
}

.skill-item li {
  color: #666;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.skill-item li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.contact-section h2 {
  color: #667eea;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.contact-info p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.contact-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .content {
    padding: 2rem 1.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
