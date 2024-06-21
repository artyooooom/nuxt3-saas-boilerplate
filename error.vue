<script setup>
    import notFound from '@/components/blocks/404/notFound.vue'

    definePageMeta({
        layout: 'default'
    })

    useHead(() => ({
        status: 404,
        title: "Page not found",
    }))
    
</script>

<template>
    <NuxtLayout>
        <notFound class="pt-32 mb-8"/>
    </NuxtLayout>
</template>

<style>
</style>