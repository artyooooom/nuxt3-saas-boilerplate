<script setup lang="ts">
import { type LandingSectionProps } from './types';
import { type ImageProps, type FeaturesProps } from '../../types';
import { computed } from 'vue';

const props = withDefaults(defineProps<LandingSectionProps>(), {
    heading: 'No heading provided in the attributes',
    align: 'left',
    filled: false,
    secondBlock: () => ({
        url: '/images/placeholder.png'
    })
});

const orderCondition = props.align === 'left';

const textContentOrderNo = computed(() => {
    return `order-${orderCondition ? '1' : '2'}`;
});
const imageOrderNo = computed(() => {
    return `order-${orderCondition ? '2' : '1'}`;
});
</script>
<template>
    <section :class="filled ? 'bg-gray-50' : ''">
        <div class="max-w-screen-xl py-12 px-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400" :class="textContentOrderNo">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ heading }}
                    </h2>
                    <p v-if="description" class="mb-8 font-light lg:text-xl">{{ description }}</p>
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3" v-for="link in links" :key="link.url">
                            <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">{{ link.url }}</span>
                        </li>
                    </ul>
                    <div class="space-y-4 sm:flex sm:space-y-0 space-x-4">
                        <a v-for="(button, i) in buttons" :key="i" :href="button.link?.url">
                            <Button v-bind="button">{{ button.title }}</Button>
                        </a>
                    </div>
                </div>

                <!-- Check if secondBlock is an ImageProps and display accordingly -->
                <img v-if="(secondBlock as ImageProps).url" :src="(secondBlock as ImageProps).url"
                    :alt="(secondBlock as ImageProps).alt" class="hidden w-full mb-4 lg:mb-0 lg:flex"
                    :class="imageOrderNo">

                <!-- If secondBlock is not an ImageProps, display it as a div block -->
                <div v-else class="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
                    :class="imageOrderNo">
                    <div v-for="(feature, index) in (secondBlock as FeaturesProps[])" :key="index" class="mb-4 ">
                        <div>
                            <svg v-if="!feature.icon" class="w-10 h-10 mb-2 text-primary md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                            <Icon v-else :name="feature.icon" color="bg-primary" class="mx-1" />
                            <h3 class="mb-2 text-2xl font-bold dark:text-white">{{ feature.heading }}</h3>
                            <p class="font-light text-gray-500 dark:text-gray-400">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Add your styles here */
</style>