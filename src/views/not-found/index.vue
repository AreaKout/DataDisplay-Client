<template>
  <section class="not-found-page">
    <h1>404</h1>
    <p>页面不存在，请检查地址是否正确。</p>
    <div class="actions">
      <RouterLink to="/test">返回测试页</RouterLink>
      <RouterLink to="/login">去登录页</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found-page {
  display: grid;
  gap: 12px;
  padding: 40px;
}

.actions {
  display: flex;
  gap: 12px;
}
</style>