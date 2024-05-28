<template>

    <div>
        <LandingHero :buttons="[{
            label: 'Example',
            variant: 'destructive'
        }, {
            label: 'Example',
            variant: 'outline'
        }]"/>
        <!-- <Button variant="destructive">Example</Button> -->
    </div>

</template>

<script setup lang="ts">
    import LandingHero from '@/components/blocks/LandingHero/index.vue'
    import LandingLogos from '@/components/blocks/LandingLogos/index.vue'

    definePageMeta({
        layout: 'main'
    })
</script>
