<script setup lang="ts">

import { type LandingCTAProps } from './types'

defineProps<LandingCTAProps>()

</script>

<template>

    <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl py-24 px-8 mx-auto">
            <div class="max-w-screen-sm mx-auto text-center">
                <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">{{
                    heading }}</h2>
                <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">{{ subheading }}</p>
                <div class="space-y-4 sm:flex sm:space-y-0 space-x-4 justify-center">
                    <Button v-for="(button, i) in actionButtons" :key="i" v-bind="button">{{ button.title }}</Button>
                </div>
            </div>
        </div>
    </section>

</template>

<style></style>