<template>
  <div class="not-found">
    <div class="container">
      <h1 class="title">404</h1>
      <p class="message">抱歉，你访问的页面不存在。</p>
      <router-link to="/" class="home-link">返回首页</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  /* --- 主题变量 --- */
  --nf-status-code-color: #888888;
  --nf-message-color: #666666;
  --nf-button-bg-color: #333333;
  --nf-button-text-color: #ffffff;
  --nf-button-hover-bg-color: #555555;

  /* --- 布局 --- */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  text-align: center;
}

.container {
  padding: 2rem;
}

.title {
  font-size: 6rem;
  font-weight: 700;
  margin: 0;
  color: var(--nf-status-code-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0.8;
}

.message {
  font-size: 1.25rem;
  margin: 1rem 0 2.5rem;
  color: var(--nf-message-color);
}

.home-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  color: var(--nf-button-text-color);
  background-color: var(--nf-button-bg-color);
  transition: background-color 0.2s ease-in-out;
}

.home-link:hover {
  background-color: var(--nf-button-hover-bg-color);
}
</style>
