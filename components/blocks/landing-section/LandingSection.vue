<script setup lang="ts">
    import { type LandingSectionProps } from './types';

    const props = withDefaults(defineProps<LandingSectionProps>(), {
        header: 'No header provided in the attributes',
        align: 'left',
        filled: false,
        image: () => ({ url: '/images/placeholder.png', alt: 'No alt text provided' })
    })

    const orderCondition = props.align === 'left'

    const textContentOrderNo = computed(() => {
        return `order-${orderCondition ? '1' : '2'}`
    })
    const imageOrderNo = computed(() => {
        return `order-${orderCondition ? '2' : '1'}`
    })
</script>

<template>
    <section :class="filled ? 'bg-gray-50' : ''">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400" :class="textContentOrderNo">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ header }}</h2>
                    <p v-if="description" class="mb-8 font-light lg:text-xl">{{ description }}</p>
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3" v-for="feature in features" :key="feature">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-white-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">{{ feature }}</span>
                        </li>
                    </ul>
                    <Button v-for="(button, i) in buttons" :key="i" v-bind="button" class="mr-4">{{ button.label }}</Button>
                </div>
                <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" :class="imageOrderNo" :src="image.url" :alt="image.alt">
            </div>
        </div>
    </section>
</template>

<style scoped></style>