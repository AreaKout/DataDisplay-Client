<template>
  <ElSubMenu v-if="hasChildren" :index="item.path">
    <template #title>
      <span class="menu-label">
        <span v-if="item.icon" class="menu-icon">{{ item.icon }}</span>
        <span>{{ item.title }}</span>
      </span>
    </template>

    <SidebarMenuItem v-for="child in item.children" :key="child.path" :item="child" />
  </ElSubMenu>

  <ElMenuItem v-else :index="item.path">
    <span class="menu-label">
      <span v-if="item.icon" class="menu-icon">{{ item.icon }}</span>
      <span>{{ item.title }}</span>
    </span>
  </ElMenuItem>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { AppMenuItem } from '@/composables/use-menu-routes'

defineOptions({
  name: 'SidebarMenuItem',
})

const props = defineProps<{
  item: AppMenuItem
}>()

const hasChildren = computed(() => Boolean(props.item.children?.length))
</script>

<style scoped lang="scss">
.menu-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.menu-icon {
  color: #64748b;
  font-size: 12px;
}
</style>
