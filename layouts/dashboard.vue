<script setup lang="ts">
    import SidebarNav from '@/components/blocks/dashboard/DashboardSidebarNav.vue'
    import Header from '@/components/blocks/header/Header.vue';
    import Footer from '@/components/blocks/footer/Footer.vue';
    import { linksData, buttonsData } from '@/data/header'
    import { footerSections, socials } from '@/data/footer' 
    import { sidebarNavItems } from '@/data/dashboard-sidenav' 

    const appConfig = useAppConfig()

</script>

<template>
    <Header v-bind="appConfig" :links="linksData" :buttons="buttonsData"/>
    <div class="hidden space-y-6 max-w-screen-xl mx-auto pt-32 pb-16 md:block px-4">
        <div class="space-y-0.5 mb-12">
            <h1 class="text-4xl tracking-tighter font-extrabold">Dashboard</h1>
            <p class="font-light text-gray-500">
                Access all the required instruments using your personal dashboard
            </p>
        </div>
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside class="-mx-4 lg:w-1/5">
            <SidebarNav :sidebar-nav-items="sidebarNavItems"/>
        </aside>
        <div class="flex-1 lg:max-w-2xl">
            <div class="space-y-6">
            <slot />
            </div>
        </div>
        </div>
    </div>
    <Footer v-bind="appConfig" :sections="footerSections" subheading="© 2021-2022 Landwind™. All Rights Reserved. Built with Flowbite and Tailwind CSS." :socials="socials"/>

    <div v-if="appConfig.supportChat.isEnabled" v-html="appConfig.supportChat.embed"></div>
</template>