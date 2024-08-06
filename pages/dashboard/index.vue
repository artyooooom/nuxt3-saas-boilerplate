<script setup lang="ts">
import { isAuthorized } from '@/middleware/isAuthorized'
import { useUserStore } from '@/store/UserStore';

definePageMeta({
    layout: 'dashboard',
    activeTab: 'home',
    middleware: [isAuthorized]
})

const userStore: any = useUserStore()

const user = userStore.userData

</script>

<template>

    <div v-if="user.supabase.subscription" class="">
        <!-- _*: add the contents for your user's index dashboard page  -->
    </div>
    <div v-else>
        <h1 class="mb-4 text-xl font-bold">Your subscription expired, renew it.</h1>
        <NuxtLink to="/#pricings">
            <Button variant="outline">Go to home page</Button>
        </NuxtLink>
    </div>

</template>