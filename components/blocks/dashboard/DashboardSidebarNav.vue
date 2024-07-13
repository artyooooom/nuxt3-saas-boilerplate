<script setup lang="ts">

import { type DashboardSidebarNavProps } from './types'
import { useRoute } from 'vue-router'
import { useToast } from '@/components/ui/toast/use-toast'
import { ToastAction } from '@/components/ui/toast'


const { toast } = useToast()
const route = useRoute()
const router = useRouter()
const client = useSupabaseClient()
const activeTab = route.meta.activeTab

defineProps<DashboardSidebarNavProps>()

let isActive = (id: string) => {
  return activeTab === id
}

let logout = async () => {
  try {
    const { error } = await client.auth.signOut()

    if (error) throw error

    router.push('/')

  } catch (e: any) {
    return toast({
      title: 'Problem occured',
      description: e.message,
      variant: 'destructive',
      action: h(ToastAction, {
        altText: 'Try again',
      }, {
        default: () => 'Try again',
      }),
    });
  }

}

</script>

<template>

  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    
    <Button v-for="item in sidebarNavItems" :key="item.title" as="a" :href="item.href" variant="ghost"
      class="w-full text-left justify-start" :class="isActive(item.id) ? 'bg-muted hover:bg-muted' : ''">
      <Icon class="w-6 h-6 mr-2" v-if="item.icon" :name="item.icon" />
      {{ item.title }}
    </Button>

    <Button as="a" variant="ghost" class="w-full text-left justify-start cursor-pointer" @click="logout">
      <Icon class="w-6 h-6 mr-2" name="material-symbols:logout" />
      Log out
    </Button>

  </nav>

</template>