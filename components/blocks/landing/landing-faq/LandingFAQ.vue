<script setup lang="ts">

import { type LandingFAQProps } from './types'

defineProps<LandingFAQProps>()

</script>

<template>

    <section class="max-w-screen-xl container mx-auto py-24 px-8">
        <div class="max-w-3xl mx-auto mb-10 text-center">
            <h2 class="mb-2 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white"
                v-if="heading">{{ heading }}</h2>
            <p class="mb-5 font-light text-muted-foreground sm:text-xl" v-if="subheading">{{ subheading }}
            </p>
        </div>
        <Accordion type="single" class="container max-w-3xl w-full mx-auto" collapsible>
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
                <AccordionTrigger class="text-left">{{ item.title }}</AccordionTrigger>
                <AccordionContent class="font-light text-muted-foreground text-lg">
                    {{ item.content }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>

</template>

<style></style>