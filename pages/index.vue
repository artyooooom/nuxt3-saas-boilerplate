<script setup lang="ts">

import LandingHero from '@/components/blocks/landing/landing-hero/LandingHero.vue';
import { type ButtonProps } from '@/components/blocks/types';

definePageMeta({
    layout: 'default'
});

const heroButtons: ButtonProps[] = [{
    title: 'Documentation',
    size: 'lg',
    link: {
        url: 'https://nuxtsaas-docs.vercel.app/',
        target: '_blank',
    }
},
{
    title: 'Authorization Page',
    size: 'lg',
    link: {
        url: '/auth',
        target: '_blank',
    },
    variant: 'secondary'
}, {
    title: 'Blog',
    size: 'lg',
    link: {
        url: '/blog',
        target: '_blank',
    },
    variant: 'secondary'
}]

const heroHeading = {
    title: 'Welcome to your first *NuxtSAAS* app!'
}
const heroDescription = {
    title: 'Go to documentation and start making your first product now! Explore the blocks & their usage examples here (pages/index.vue)'
}

let heroImage = {
    url: '/images/github-dark.png'
}


</script>

<template>

    <div>

        <LandingHero :description="heroDescription" :image="heroImage" :heading="heroHeading" :buttons="heroButtons"
            align="center" />

    </div>

</template>
