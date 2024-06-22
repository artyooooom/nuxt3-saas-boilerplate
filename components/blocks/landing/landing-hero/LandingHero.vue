<script setup lang="ts">
import { type LandingHeroProps } from './types';

let props = withDefaults(defineProps<LandingHeroProps>(), {
  header: 'No header provided in the attributes',
  description: 'No description provided in the attributes',
  align: 'left',
  image: () => ({ url: '/images/placeholder.png', alt: 'No alt text provided' })
});

  let getCenteredClasses = computed(() => {
    if(props.align === 'center') {
      return [
        'mx-auto',
        'justify-center',
        'text-center',
      ]
    }
  })
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-36" :class="{getCenteredClasses, 'grid': (align === 'left') }">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white" :class="getCenteredClasses">
          {{ header }}
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" :class="getCenteredClasses">
          {{ description }}
        </p>
        <div class="space-y-4 sm:flex sm:space-y-0 space-x-4" :class="getCenteredClasses">
          <a v-for="(button, i) in buttons" :key="i" :href="button.link?.url">
            <Button v-bind="button">{{ button.label }}</Button>
          </a>
        </div>
        <div class="flex my-6" :class="getCenteredClasses" v-if="alreadyUsing">
          <div class="-space-x-4 avatar-group justy-start mr-2">
            <div class="avatar w-10 h-10" v-for="(image, i) in alreadyUsing.images" :key="i" >
              <img :alt="image.alt" fetchpriority="high" width="400" height="400"
                decoding="async" data-nimg="1" style="color:transparent" :src="image.url">
            </div>
          </div>
          <div>
            <div class="flex" v-if="alreadyUsing.showStars">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"></path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"></path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"></path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"></path>
              </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <p class="text-sm font-light opacity-75">{{ alreadyUsing.description }}</p>
          </div>
        </div>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex" :class="{ 'justify-center': (align === 'center')}">
        <img class="max-w-3xl w-full" :class="{'my-8': (align === 'center')}" :src="image.url" :alt="image.alt">
      </div>
    </div>
  </section>
</template>


<style scoped>
.avatar-group {
  display: flex;
  overflow: hidden;
}

.avatar img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.avatar-group :where(.avatar) {
  overflow: hidden;
  border-radius: 9999px;
  border-width: 3px;
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
</style>