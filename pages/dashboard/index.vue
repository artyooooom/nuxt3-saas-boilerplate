<script setup lang="ts">


import { isAuthorized } from '~/middleware/isAuthorized'

definePageMeta({
    layout: 'dashboard',
    activeTab: 'home',
    middleware: [isAuthorized]
})

const $store = useNuxtApp()

const userData: any = $store.$userData;

</script>

<template>

    <div v-if="userData.supabase.subscription" class="">
        <!-- _*: add the contents for your user's index dashboard page  -->
    </div>
    <div v-else>
        <h1 class="mb-4 text-xl font-bold">Your subscription expired, renew it.</h1>
        <NuxtLink to="/#pricings">
            <Button variant="outline">Go to home page</Button>
        </NuxtLink>
    </div>
    
</template>