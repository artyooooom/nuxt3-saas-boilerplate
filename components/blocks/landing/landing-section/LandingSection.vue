<script setup lang="ts">
import { type LandingSectionProps } from './types';
import { type ImageProps, type FeatureProps } from '../../types';
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
                <div class="text-gray-500 sm:text-lg" :class="textContentOrderNo">
                    <p class="text-lg font-medium text-primary">{{ tagline }}</p>
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ heading }}
                    </h2>
                    <p v-if="description" class="mb-8 font-light lg:text-xl">{{ description }}</p>
                    <div class="py-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        <div v-for="link in links" :key="link.url">
                        <a :href="link.url" class="inline-flex items-center text-base font-medium text-primary hover:underline">
                            {{ link.title }}
                            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        </div>
                    </div>
                    <div class="space-y-4 sm:flex sm:space-y-0 space-x-4">
                        <NuxtLink v-for="(button, i) in buttons" :key="i" :to="button.link?.url">
                            <Button v-bind="button">
                            <Icon v-if="button.icon" class="mr-2" v-bind="button.icon" />
                            <span>{{ button.title }}</span>
                            </Button>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Check if secondBlock is an ImageProps and display accordingly -->
                <img v-if="(secondBlock as ImageProps).url" :src="(secondBlock as ImageProps).url"
                    :alt="(secondBlock as ImageProps).alt" class="hidden w-full mb-4 lg:mb-0 lg:flex"
                    :class="imageOrderNo">

                <!-- If secondBlock is not an ImageProps, display it as a div block -->
                <div v-else class="space-y-8 md:grid mt-12 md:grid-cols-2 md:gap-12 md:space-y-0"
                    :class="imageOrderNo">
                    <div v-for="(feature, index) in (secondBlock as FeatureProps[])" :key="index" class="mb-4 ">
                        <div>
                            
                            <svg v-if="!feature.icon" class="w-10 h-10 mb-2 text-primary md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                            <Icon v-else :name="feature.icon" class="w-10 h-10 mb-2 text-primary md:w-12 md:h-12" />

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