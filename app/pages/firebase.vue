<template>
  <div class="firebase-page">
    <NuxtLink to="/" class="back-link">← 返回首頁</NuxtLink>
    <h1>🔥 Firebase x Nuxt 3 測試</h1>
    <ClientOnly>
      <div v-if="firebaseName" class="status success">
        <p>✅ 成功連線！</p>
        <p>
          專案 ID: <strong>{{ firebaseName }}</strong>
        </p>
      </div>
      <div v-else class="status error">
        <p>❌ 尚未偵測到 Firebase</p>
        <p class="hint">
          請確認 .env 使用 KEY=value 格式，且已重啟 dev server。
        </p>
      </div>
      <template #fallback>
        <p class="hint">載入中…</p>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
const { $firebaseApp } = useNuxtApp();
// 取得專案名稱來確認連線
const firebaseName = $firebaseApp?.options.projectId;
</script>

<style scoped>
.firebase-page {
  min-height: 60vh;
  padding: 40px 20px;
  font-family: sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
}

.back-link:hover {
  color: #764ba2;
}

h1 {
  color: #333;
  margin-bottom: 1.5rem;
}

.status.success p {
  color: green;
}
.status.error p {
  color: #c00;
}
.hint {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}
</style>
