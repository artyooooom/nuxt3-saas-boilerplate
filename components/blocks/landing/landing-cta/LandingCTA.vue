<script setup lang="ts">

import { type LandingCTAProps } from './types'
withDefaults(defineProps<LandingCTAProps>(), {
    filled: true
})
</script>

<template>

    <section :class="{'bg-gray-50 dark:bg-gray-600 dark:bg-opacity-5': filled}">
        <div class="max-w-screen-xl py-16 px-8 mx-auto">
            <div class="max-w-screen-sm mx-auto text-center">
                <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">{{ heading }}</h2>
                <p class="mb-6 font-light text-muted-foreground md:text-lg">{{ subheading }}</p>
                <div class="space-y-4 sm:flex sm:space-y-0 space-x-4 justify-center">
                    <NuxtLink v-for="(button, i) in buttons" :key="i" :to="button.link?.url">
                            <Button v-bind="button">
                            <Icon v-if="button.icon" class="mr-2" v-bind="button.icon" />
                            <span>{{ button.title }}</span>
                            </Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

</template>

<style></style>