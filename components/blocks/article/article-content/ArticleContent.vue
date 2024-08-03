<script setup lang="ts">

import { type ArticleContentProps } from './types'
import PersonCard from '@/components/blocks/person-card/PersonCard.vue'

defineProps<ArticleContentProps>()

</script>

<template>

    <!-- article heading -->
    <h1 class="mx-auto text-5xl text-black font-extrabold leading-none tracking-tight">{{ heading }}</h1>

    <!-- article author & metadata -->
    <div class="my-6">
        <PersonCard v-bind="person" />
    </div>

    <!-- article cover image -->
    <div class="w-full h-96" :style="{ backgroundImage: `url(${image.url});`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }"></div>

    <!-- article content -->
    <slot />

</template>

<style scoped></style>