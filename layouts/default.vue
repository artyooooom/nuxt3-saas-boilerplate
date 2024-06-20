<script lang="ts" setup>
    import Header from '~/components/blocks/header/Header.vue';
    import Footer from '~/components/blocks/footer/Footer.vue';
    import { linksData, buttonsData } from '@/data/header'
    import { footerSections, socials } from '@/data/footer' 

    const appConfig = useAppConfig()

</script>

<template>
  <div>
    <Header v-bind="appConfig" :links="linksData" :buttons="buttonsData"/>
    <slot />
    <Footer v-bind="appConfig" :sections="footerSections" subheading="© 2021-2022 Landwind™. All Rights Reserved. Built with Flowbite and Tailwind CSS." :socials="socials"/>
  </div>
</template>

<style scoped></style>