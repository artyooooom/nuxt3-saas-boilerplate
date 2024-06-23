<script setup lang="ts">
    import { auth } from '@/middleware/auth'

    definePageMeta({
        layout: 'dashboard',
        activeTab: 'home',
        middleware: [auth]    
    })

</script>

<template>

</template>