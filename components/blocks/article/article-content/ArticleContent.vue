<script setup lang="ts">
    import { type ArticleContentProps } from './types'
    import PersonCard from '@/components/blocks/person-card/PersonCard.vue'

    defineProps<ArticleContentProps>()
</script>

<template>

    <!-- article heading -->
    <h1 class="mx-auto text-5xl text-black font-extrabold leading-none tracking-tight">What's the purpose of having a blog for your SAAS?</h1>
    
    <!-- article author & metadata -->
    <div class="my-6">
        <PersonCard v-bind="author"/>
    </div>

    <!-- article cover image -->
    <div class="w-full h-96 mb-8" style="background-image: url('/images/bg.jpeg'); background-size: cover;"></div>

    <!-- article content -->
    <slot />

</template>

<style scoped></style>