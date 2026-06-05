<template>
  <section class="test-page">
    <h1>{{ message }}</h1>
    <div class="actions">
      <RouterLink to="/unknown-path">跳到不存在页面</RouterLink>
      <RouterLink to="/login">去登录页</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Test, Vue!');
</script>

<style scoped>
.test-page {
  display: grid;
  gap: 12px;
  padding: 40px;
}

.actions {
  display: flex;
  gap: 12px;
}

</style>