<script setup lang="ts">

import { auth } from '@/middleware/auth'

definePageMeta({
    layout: 'dashboard',
    activeTab: 'subscription',
    middleware: [auth]
})

</script>

<template>
    <!-- _*: add the contents for your user's subscription dashboard page  -->
</template>