<script setup lang="ts">

import { type LandingPricingsProps } from './types';

const props = defineProps<LandingPricingsProps>()

const gridColsClass = computed(() => {
    const count = props.pricingPlans.length;
    return `lg:grid-cols-${Math.min(count, 4)}`;
});

for (let i = 0; i < props.pricingPlans.length; i++) {
    let pricingPlan = props.pricingPlans[i]

    // if there is no custom action event - set the default one
    // buy link generation and redirecting to checkout on click
    if (!pricingPlan.action.event && pricingPlan.lemonsqueezyId) {
        pricingPlan.action.event = (async () => {
            const url = await $fetch('/api/getProductBuyLink/' + pricingPlan.lemonsqueezyId)

            if (url) {
                navigateTo(url, {
                    external: true
                })
            }
        })
    }
}

</script>

<template>

    <div class="container space-y-8 py-24 px-8 lg:grid sm:gap-6 xl:gap-10 lg:space-y-0" :class="gridColsClass">
        <!-- Pricing Card -->
        <div v-for="pricingPlan in pricingPlans" :key="pricingPlan.heading"
            class="flex flex-col max-w-lg w-full p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">{{ pricingPlan.heading }}</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400" v-if="pricingPlan.subheading">{{
                pricingPlan.subheading }}</p>
            <div class="flex items-baseline justify-center my-8">
                <span class="mr-2 text-5xl font-extrabold">{{ pricingPlan.pricing }}</span>
                <span class="text-gray-500 dark:text-gray-400">/{{ pricingPlan.period }}</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3" v-for="feature in pricingPlan.features">
                    <!-- Icon -->
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span>{{ feature }}</span>
                </li>
            </ul>
            <a @click="pricingPlan.action.event"
                class="bg-primary cursor-pointer text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{
                    pricingPlan.action.title }}</a>
        </div>
    </div>

</template>

<style></style>