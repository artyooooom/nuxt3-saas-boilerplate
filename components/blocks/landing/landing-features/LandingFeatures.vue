<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type FeaturesProps } from "@/components/blocks/types";
import { type LandingFeaturesProps } from './types';

const props = defineProps<LandingFeaturesProps>()

const gridColsClass = computed(() => {
    const count = props.features.length;

    if(count < 3) {
        return `lg:grid-cols-${count}`;
    }

    return 'lg:grid-cols-3'
});

</script>

<template>
    <section class="container py-24 text-center">
        <h2 class="text-lg font-medium text-primary" v-if="tagline">{{ tagline }}</h2>

        <h2 class=" mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">{{ heading }}</h2>

        <h3 class="md:w-1/2 mx-auto mb-16 font-light text-muted-foreground md:text-lg" v-if="description">
            {{ description }}
        </h3>

        <div class="grid sm:grid-cols-2 gap-4" :class="gridColsClass">
            <div v-for="feature in features" :key="feature.heading">
                <Card class="h-full mx-auto max-w-sm bg-background border-0 shadow-none max-w">
                    <CardHeader class="flex justify-center items-center">
                        <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                            <Icon :name="feature.icon" class="size-6 text-primary" />
                        </div>

                        <CardTitle class="text-2xl font-bold">
                            {{ feature.heading }}
                        </CardTitle>
                    </CardHeader>

                    <CardContent class="-mt-1 font-light text-muted-foreground">
                        {{ feature.description }}
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>

<style lang="less" scoped></style>