<script lang="ts" setup>
  import Header from '~/components/blocks/header/Header.vue';
  import Footer from '~/components/blocks/footer/Footer.vue';
  import { type ButtonProps, type FooterSocialsProps, type LinkProps } from '@/components/blocks/types';

  const appConfig = useAppConfig()

  const linksData: LinkProps[] = [{
    label: 'Pricings',
    url: '/pricings',
    isActive: true
  }, {
    label: 'Features',
    url: '/features'
  }]

  const buttonsData: ButtonProps[] = [{
    label: 'Auth',
    link: {
        url: '/auth',
        target: '_blank'
    },
    variant: 'destructive'
  }, {
    label: 'Example',
    variant: 'outline'
  }]

  const footerSections = [{
        heading: 'Company',
        links: [
        {
            label: 'About',
            url: '/about',
        },
        {
            label: 'Careers',
            url: '/careers',
        },
        {
            label: 'Brand Center',
            url: '/brand-center',
        },
        {
            label: 'Blog',
            url: '/blog',
        },
        ]
    }, {
        heading: 'Help Center',
        links: [
        {
            label: 'Discord',
            url: '/discord',
        },
        {
            label: 'Twitter',
            url: '/twitter',
        },
        {
            label: 'Facebook',
            url: '/facebook',
        },
        {
            label: 'Blog',
            url: '/blog',
        },
        ]
    }, {
        heading: 'Company',
        links: [
        {
            label: 'About',
            url: '/about',
        },
        {
            label: 'Careers',
            url: '/careers',
        },
        {
            label: 'Brand Center',
            url: '/brand-center',
        },
        {
            label: 'Blog',
            url: '/blog',
        },
        ]
    }, {
        heading: 'Help Center',
        links: [
        {
            label: 'Discord',
            url: '/discord',
        },
        {
            label: 'Twitter',
            url: '/twitter',
        },
        {
            label: 'Facebook',
            url: '/facebook',
        },
        {
            label: 'Blog',
            url: '/blog',
        },
        ]
    },{
        heading: 'Company',
        links: [
        {
            label: 'About',
            url: '/about',
        },
        {
            label: 'Careers',
            url: '/careers',
        },
        {
            label: 'Brand Center',
            url: '/brand-center',
        },
        {
            label: 'Blog',
            url: '/blog',
        },
        ]
  }]


  const socials: FooterSocialsProps = {
        twitter: '/',
        instagram: '/',
        facebook: '/',
        github: '/',
        linkedin: '/'
    }
  
</script>

<template>
  <div>
    <Header v-bind="appConfig" :links="linksData" :buttons="buttonsData"/>
    <slot />
    <Footer v-bind="appConfig" :sections="footerSections" subheading="© 2021-2022 Landwind™. All Rights Reserved. Built with Flowbite and Tailwind CSS." :socials="socials"/>
  </div>
</template>

<style scoped></style>