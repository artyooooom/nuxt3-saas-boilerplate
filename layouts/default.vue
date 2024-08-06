<script lang="ts" setup>

import Header from '~/components/blocks/header/Header.vue';
import Footer from '~/components/blocks/footer/Footer.vue';
import { footerSections, socials, subheading } from '~/data/footer'
import { type ButtonProps, type LinkProps } from '@/components/blocks/types';

const appConfig = useAppConfig()

const scrollPosition: any = ref(0);

let updateScroll = () => {
  scrollPosition.value = window.scrollY
  
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
})

let navBarClass = computed(() => { 
  return scrollPosition.value > 100 ? 'bg-opacity-100 dark:bg-opacity-90' : 'bg-opacity-0 dark:bg-opacity-0'; 
})


const linksData: LinkProps[] = [{
    title: 'Features',
    url: '/'
},
{
    title: 'Help',
    url: '/'
}, {
    title: 'Pricings',
    url: '/'
}]

const buttonsData: ButtonProps[] = [{
    title: 'Create an account',
    // variant: 'secondary'
},{
    title: 'Sign In',
    variant: 'ghost'
}]

const announcement = {
    title: '🎉 Announcement Bar Example',
    backgroundClass: 'bg-red-500'
}

</script>

<template>

  <div>

    <Header v-bind="appConfig" :links="linksData" :buttons="buttonsData" :announcement="announcement" class="bg-white duration-200 dark:bg-gray-950" :class="navBarClass"/>
    <slot />
    <Footer v-bind="appConfig" :sections="footerSections" :subheading="subheading" :socials="socials" />

    <div v-if="appConfig.supportChat.isEnabled" v-html="appConfig.supportChat.embed"></div>

  </div>

</template>

<style scoped></style>