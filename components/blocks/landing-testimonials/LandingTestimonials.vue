<script setup lang="ts">
    import { type LandingTestimonialsProps } from './types';

    defineProps<LandingTestimonialsProps>()

    const shortName = (name: string) => {

        let firstLetter = name[0];

        let secondLetter;

        // if name consists of 2 words - take first letter of first word + first letter of second word
        // else take first two letter of first word
        if(name.split(' ').length == 2) { 
            secondLetter = name.split(' ')[1][0]
        } else {
            secondLetter = name[1]
        }

        return (firstLetter + secondLetter).toUpperCase()
        
    }

</script>

<template>
    <section class="py-8">
        <div class="max-w-screen-xl w-full mx-auto md:columns-2 lg:columns-3 xl:columns-3 space-y-3 md:space-y-6 md:gap-6">
            <div class="break-inside-avoid max-md:flex justify-center p-5 bg-gray-50 rounded-lg h-min" v-for="(testimonial, i) in testimonials" :key="i">
                <div class="flex items-center gap-4">

                    <Avatar class="hidden rounded-full h-10 w-10 sm:flex bg-white">
                        <AvatarImage v-if="testimonial.avatar" :src="testimonial.avatar.url" :alt="testimonial.avatar.alt" />
                        <AvatarFallback>{{ shortName(testimonial.name) }}</AvatarFallback>
                    </Avatar>
                    
                    <div class="grid">
                        <p class="text-sm font-medium leading-none">
                            {{ testimonial.name }}
                        </p>
                        <p class="text-sm text-muted-foreground" v-if="testimonial.tag">
                            {{ testimonial.tag }}
                        </p>
                    </div>
                </div>
                <div class="testimonial-content ml-auto text-sm mt-5" v-html="testimonial.content"></div>
                <img class="mt-5 ml-auto rounded-lg" v-if="testimonial.img" :src="testimonial.img.url" :alt="testimonial.img.alt">
            </div>
        </div>
    </section>
</template>

<style>
    .testimonial-content > span {
        background: hsl(var(--foreground));
        color: hsl(var(--muted));
        padding: 2px;
        font-size: 12px;
    }
</style>