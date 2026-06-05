<template>
  <section class="app-shell">
    <header class="app-header">
      <h1 class="title">Data Display</h1>
      <div class="header-actions">
        <RouterLink to="/login">登录</RouterLink>
      </div>
    </header>

    <section class="app-main">
      <aside class="app-sidebar">
        <ElScrollbar>
          <ElMenu :default-active="activeMenu" router class="menu">
            <SidebarMenuItem v-for="item in menuItems" :key="item.path" :item="item" />
          </ElMenu>
        </ElScrollbar>
      </aside>

      <main class="app-content">
        <RouterView />
      </main>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useMenuRoutes } from '@/composables/use-menu-routes'
import SidebarMenuItem from '@/components/sidebar-menu-item.vue'

const route = useRoute()
const { menuItems } = useMenuRoutes()

const activeMenu = computed(() => route.path)
</script>

<style scoped lang="scss">
.app-shell {
  display: grid;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #e2e8f0;
  background: #ffffff;
}

.title {
  margin: 0;
  font-size: 20px;
}

.app-main {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 0;
}

.app-sidebar {
  min-height: 0;
  border-right: 1px solid #e2e8f0;
  background: #f8fafc;
}

.menu {
  border-right: none;
  background: transparent;
}

.app-content {
  min-height: 0;
  overflow: auto;
  padding: 20px;
  background: #f1f5f9;
}

@media (max-width: 900px) {
  .app-main {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .app-sidebar {
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }
}
</style>
