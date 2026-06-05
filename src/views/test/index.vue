<template>
  <section class="test-page">
    <h1>{{ message }}</h1>
    <div class="actions">
      <RouterLink to="/test/report">去报表页</RouterLink>
      <RouterLink to="/unknown-path">测试 404 跳转</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Test, Vue!');
</script>

<style scoped lang="scss">
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