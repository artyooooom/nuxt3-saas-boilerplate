<script setup lang="ts">

import PersonCard from '@/components/blocks/person-card/PersonCard.vue'
import { type ArticleCardProps } from './types';

withDefaults(defineProps<ArticleCardProps>(), {
    image: () => ({ url: '/images/placeholder.png', alt: 'No alt text provided' }),
})

</script>

<template>

    <a :href="'/blog/' + url" target="_blank">

        <img class="h-auto rounded-t-lg max-h-36 w-full overflow-hidden object-cover" v-if="image" :src="image.url"
            :alt="image.alt">

        <div class="py-3 mt-3">

            <h2 class="mx-auto text-2xl mb-3 font-semibold leading-none tracking-tight">{{ heading }}</h2>

            <div class="ml-auto text-sm mt-5 line-clamp-4 tracking-wide leading-relaxed font-light" v-if="description"
                v-html="description"></div>


            <div class="my-5">
                <PersonCard v-bind="person" />
            </div>

        </div>

    </a>

</template>

<style scoped></style>