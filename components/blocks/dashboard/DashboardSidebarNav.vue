<script setup lang="ts">
import { type DashboardSidebarNavProps } from './types'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeTab = route.meta.activeTab

defineProps<DashboardSidebarNavProps>()

let isActive = (id: string) => {
  return activeTab === id
}
</script>

<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <Button v-for="item in sidebarNavItems" :key="item.title" as="a" :href="item.href" variant="ghost"
      class="w-full text-left justify-start" :class="isActive(item.id) ? 'bg-muted hover:bg-muted' : ''">
      <Icon class="w-6 h-6 mr-2" v-if="item.icon" :name="item.icon" />
      {{ item.title }}
    </Button>
  </nav>
</template>