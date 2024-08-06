<script setup lang="ts">

import { type LandingTestimonialsProps } from './types';
import PersonCard from '@/components/blocks/person-card/PersonCard.vue'

defineProps<LandingTestimonialsProps>()

</script>

<template>

    <section class="py-12 px-8">
        <div
            class="max-w-screen-xl w-full mx-auto md:columns-2 lg:columns-3 xl:columns-3 space-y-3 md:space-y-6 md:gap-6">
            <div class="break-inside-avoid justify-center p-5 bg-gray-50 rounded-lg h-min dark:bg-transparent dark:bg-gradient-to-br dark:from-slate-300/5 dark:to-gray-300/5"
                v-for="(testimonial, i) in testimonials" :key="i">
                <PersonCard v-bind="testimonial.person" />
                <div class="testimonial-content ml-auto text-sm mt-5" v-html="testimonial.content"></div>
                <img class="mt-5 ml-auto rounded-lg" v-if="testimonial.image" :src="testimonial.image.url"
                    :alt="testimonial.image.alt">
            </div>
        </div>
    </section>

</template>

<style>
.testimonial-content>span {
    background: hsl(var(--foreground));
    color: hsl(var(--muted));
    padding: 2px;
    font-size: 12px;
}
</style>