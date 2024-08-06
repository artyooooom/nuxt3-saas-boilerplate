<script setup lang="ts">

import SidebarNav from '@/components/blocks/dashboard/DashboardSidebarNav.vue'
import Header from '@/components/blocks/header/Header.vue';
import Footer from '@/components/blocks/footer/Footer.vue';
import { footerSections, subheading, socials } from '@/data/footer'
import { type ButtonProps, type LinkProps } from '@/components/blocks/types';


const appConfig = useAppConfig()
const route = useRoute()

const activeTab: any = ref(route.meta.activeTab)

const sidebarNavItems = [
    {
        id: 'home',
        title: 'Home',
        href: '/dashboard',
        icon: 'material-symbols:person-outline'
    },
    {
        id: 'subscription',
        title: 'Subscription',
        href: '/dashboard/subscription',
        icon: 'mdi:contactless-payment-circle-outline'
    }
]

const linksData: LinkProps[] = []

const buttonsData: ButtonProps[] = []

const announcement = {}

</script>

<template>

    <Header v-bind="appConfig" :links="linksData" :buttons="buttonsData" :announcement="announcement"/>
    <div class="space-y-6 max-w-screen-xl mx-auto pb-8 pt-20 md:block px-4">
        <div class="space-y-0.5 mb-12">
            <h1 class="text-4xl tracking-tighter font-extrabold">Dashboard</h1>
            <p class="text-muted-foreground">
                Access all the required instruments using your personal dashboard
            </p>
        </div>
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside class="lg:w-1/5 overflow-x-auto">
                <SidebarNav :sidebar-nav-items="sidebarNavItems"/>
            </aside>
            <div class="flex-1">
                <div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
    <Footer v-bind="appConfig" :sections="footerSections"
        :subheading="subheading"
        :socials="socials" />

    <div v-if="appConfig.supportChat.isEnabled" v-html="appConfig.supportChat.embed"></div>

</template>