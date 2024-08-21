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
    if (!pricingPlan.action.event && pricingPlan.paymentLink) {
        pricingPlan.action.event = (async () => {
            const url = pricingPlan.paymentLink

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

    <div class="container space-y-8 py-24 px-8 lg:flex justify-center sm:gap-6 xl:gap-10 lg:space-y-0" :class="gridColsClass">
        <!-- Pricing Card -->
        <div v-for="pricingPlan in pricingPlans" :key="pricingPlan.heading"
            class="flex flex-col max-w-lg w-full p-6 text-gray-900 border-gray-100 border-opacity-5 border-2 rounded-lg shadow xl:p-8 dark:text-white dark:bg-gradient-to-br dark:from-slate-300/5 dark:to-gray-300/5" :class="{'border-primary': pricingPlan.featured === true}">
            <h3 class="mb-4 text-2xl font-semibold">{{ pricingPlan.heading }}</h3>
            <p class="font-light text-gray-500 sm:text-lg" v-if="pricingPlan.subheading">{{
                pricingPlan.subheading }}</p>
            <div class="flex items-baseline my-8">
                <div v-if="pricingPlan.pricing.discount">
                    <span class="line-through mr-4 text-xl opacity-75">{{ pricingPlan.pricing.actual }}</span>
                    <span class="mr-2 text-5xl font-extrabold">{{ pricingPlan.pricing.discount }}</span>                    
                </div>
                <span v-else class="mr-2 text-5xl font-extrabold">{{ pricingPlan.pricing.actual }}</span>
                <span class="text-gray-500 dark:text-gray-400">/{{ pricingPlan.period }}</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3" v-for="feature in pricingPlan.features">
                    <!-- Icon -->
                    <Icon name="material-symbols:check-small" class="w-5 h-5 text-primary"/>
                    <span>{{ feature }}</span>
                </li>
                <li class="flex items-center space-x-3 opacity-65" v-for="unavailable in pricingPlan.unavailable">
                    <!-- Icon -->
                    <Icon name="ci:close-small" class="w-5 h-5 text-stone-600"/>
                    <span>{{ unavailable }}</span>
                </li>
            </ul>
            <a @click="pricingPlan.action.event"
                class="bg-primary cursor-pointer text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{
                    pricingPlan.action.title }}</a>
        </div>
    </div>

</template>

<style></style>