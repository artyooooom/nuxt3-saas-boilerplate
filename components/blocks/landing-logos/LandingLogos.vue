
<script setup lang="ts">
    import { type LandingLogosProps } from './types';

    const props = defineProps<LandingLogosProps>();

    const gridColsClass = computed(() => {
        const count = props.logos.length;
        return `grid-cols-${Math.min(count, 12)}`;
    });

</script>

<template>

    <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div class="grid gap-8 text-gray-500 dark:text-gray-400 max-sm:gap-14 max-sm:grid-cols-1" :class="gridColsClass">

                <a v-for="logo in logos" :key="logo.alt" :href="logo.link" target="_blank" class="flex items-center justify-self-center">
                    <div v-if="logo.type === 'svg'" v-html="logo.data"></div>
                    <img v-else :src="logo.data" :alt="logo.alt">
                </a>

            </div>
        </div>
    </section>

</template>

<style scoped></style>