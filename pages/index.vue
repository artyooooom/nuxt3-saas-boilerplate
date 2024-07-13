<script setup lang="ts">
import LandingHero from '@/components/blocks/landing/landing-hero/LandingHero.vue';
import { type LandingHeroProps } from '@/components/blocks/landing/landing-hero/types'; // Ensure you import the interface

definePageMeta({
    layout: 'default'
});

const landingHeroContent: LandingHeroProps = {
    heading: {
        title: 'Welcome to your *SAAS boilerplate!*',
    },
    description: {
        title: 'Welcome to the Nuxt 3 boilerplate to *build and deliver* your SaaS or any other web applications in days instead of weeks!',
        styling: 1
    },
    buttons: [{
        title: 'Docs',
        link: {
            url: '/docs'
        },
        variant: 'secondary',
        icon: {
            name: 'material-symbols:docs-outline',
            color: 'black',
            size: '18'
        }
    }],
    align: 'center' // Add any other necessary default properties to match the interface
}
</script>

<template>
        <!-- _*: add the contents for your landing page -->
    <LandingHero v-bind="landingHeroContent" />
</template>
