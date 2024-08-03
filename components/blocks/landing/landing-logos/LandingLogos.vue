<script setup lang="ts">

import { type LandingLogosProps } from './types';

const props = defineProps<LandingLogosProps>();

const gridColsClass = computed(() => {
    const count = props.logos.length;
    return `grid-cols-${Math.min(count, 12)}`;
});

</script>

<template>

    <section>
        <div class="max-w-screen-xl p-8 mx-auto">
            <div class="grid text-gray-500 max-sm:gap-14 max-sm:grid-cols-1"
                :class="gridColsClass">

                <a v-for="logo in logos" :key="logo.alt" :href="logo.link" target="_blank"
                    class="flex items-center justify-self-center">
                    <div v-if="logo.type === 'svg'" v-html="logo.data"></div>
                    <img v-else :src="logo.data" class="max-h-16 saturate-0 hover:saturate-100 duration-150" :alt="logo.alt">
                </a>

            </div>
        </div>
    </section>

</template>

<style scoped></style>