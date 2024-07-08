<script lang="ts" setup>
    import Header from '~/components/blocks/header/Header.vue';
    import Footer from '~/components/blocks/footer/Footer.vue';
    import { linksData, buttonsData, announcement } from '@/data/header'
    import { footerSections, socials } from '@/data/footer' 

    const appConfig = useAppConfig()

</script>

<template>
  <div>
    <Header v-bind="appConfig" :links="linksData" :buttons="buttonsData" :announcement="announcement"/>
    <slot />
    <Footer v-bind="appConfig" :sections="footerSections" subheading="© 2021-2022 Landwind™. All Rights Reserved. Built with Flowbite and Tailwind CSS." :socials="socials"/>
    
    <div v-if="appConfig.supportChat.isEnabled" v-html="appConfig.supportChat.embed"></div>
  </div>
</template>

<style scoped></style>