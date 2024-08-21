<script setup lang="ts">

import LandingHero from '@/components/blocks/landing/landing-hero/LandingHero.vue';
import LandingSection from '@/components/blocks/landing/landing-section/LandingSection.vue';
import LandingTestimonials from '@/components/blocks/landing/landing-testimonials/LandingTestimonials.vue';
import LandingQuote from '@/components/blocks/landing/landing-quote/LandingQuote.vue';
import LandingFAQ from '@/components/blocks/landing/landing-faq/LandingFAQ.vue';
import LandingCTA from '@/components/blocks/landing/landing-cta/LandingCTA.vue';
import LandingPricings from '@/components/blocks/landing/landing-pricings/LandingPricings.vue';
import { type ButtonProps, type TestimonialProps, type PricingPlanProps, type AccordionItemProps } from '@/components/blocks/types';

definePageMeta({
    layout: 'default'
});

const heroButtons: ButtonProps[] = [{
    title: 'Documentation',
    size: 'lg',
    link: {
        url: '#pricings'
    }
},
{
    title: 'Authorization Page',
    size: 'lg',
    link: {
        url: '/auth',
    },
    variant: 'secondary'
}, {
    title: 'Blog',
    size: 'lg',
    link: {
        url: '/blog',
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

const CTAButton: ButtonProps[] = [{
    title: 'Get Started',
    link: {
        url: '#pricings'
    }
}]

const pricingPlans: PricingPlanProps[] = [
    {
        heading:"Starter Package",
        pricing: {
            actual: "$39",
        },
        features: ['Example'],
        period:"Lifetime",
        paymentLink:"https://buy.stripe.com/test_7sI01YdJDbla3qU144",
        action: {
            title: 'Get Started'
        }
    },
    {
        heading:"Starter Package [Subscription]",
        pricing: {
            actual: "$39",
        },
        features: ['Example'],
        period:"day",
        paymentLink:"https://buy.stripe.com/test_dR62a620Vah6aTmbIJ",
        action: {
            title: 'Get Started'
        }
    },
]

</script>

<template>

    <div>

        <LandingHero :description="heroDescription" :image="heroImage" :heading="heroHeading" :buttons="heroButtons"
            align="center" />

        <LandingPricings :pricing-plans="pricingPlans"/>  

    </div>

</template>
