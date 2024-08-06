<script lang="ts" setup>

import type HeaderProps from './types';
import ColorMode from '@/components/blocks/color-mode/ColorMode.vue';

defineProps<HeaderProps>()

</script>

<template>

    <header class="sticky top-0 w-full z-50">
        <NuxtLink :to="announcement.link" class="block text-center text-white text-sm py-2"
            :class="announcement.backgroundClass" v-if="announcement?.title">{{ announcement.title }}</NuxtLink>
        <nav class="border-gray-200 py-4">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <NuxtLink to="/" class="flex items-center">
                    <img v-if="appLogo" :src="appLogo" :alt="appName" class="h-6 mr-3 sm:h-9" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ appName
                        }}</span>
                </NuxtLink>
                <div class="flex items-center lg:order-2 space-x-4">
                    <NuxtLink v-for="(button, i) in buttons" :key="i"
                        class="block py-2 pr-1 rounded lg:bg-transparent lg:p-0 dark:text-white"
                        :target="button.link?.target" :to="button.link?.url">
                        <Button v-bind="button">{{ button.title }}</Button>
                    </NuxtLink>
                    <ColorMode/>
                    <!-- <a href="https://themesberg.com/product/tailwind-css/landing-page" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a> -->
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                        <li v-for="link in links" :key="link.title">
                            <NuxtLink
                                class="block py-2 px-3 rounded lg:bg-transparent text-sm hover:bg-gray-950 hover:dark:bg-gray-50 hover:dark:bg-opacity-5 hover:bg-opacity-5"
                                :to="link.url">
                                {{ link.title }}
                            </NuxtLink>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<style scoped></style>
