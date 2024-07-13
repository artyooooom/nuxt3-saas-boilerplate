<script setup lang="ts">

import { auth } from '@/middleware/auth'

definePageMeta({
    layout: 'dashboard',
    activeTab: 'home',
    middleware: [auth]
})

</script>

<template>
    <!-- _*: add the contents for your user's index dashboard page  -->
</template>