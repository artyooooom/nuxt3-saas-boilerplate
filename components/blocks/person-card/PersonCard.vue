<script setup lang="ts">

import { type PersonProps } from '../types';

const props = withDefaults(defineProps<PersonProps>(), {
    name: 'No person name provided'
})

const shortName = computed(() => {

    const name = props.name;

    let firstLetter = name[0];

    let secondLetter;

    // if name consists of 2 words - take first letter of first word + first letter of second word
    // else take first two letter of first word
    if (name.split(' ').length == 2) {
        secondLetter = name.split(' ')[1][0]
    } else {
        secondLetter = name[1]
    }

    return (firstLetter + secondLetter).toUpperCase()

})

</script>

<template>

    <div class="flex items-center space-x-4">
        <Avatar>
            <AvatarImage v-if="avatar" :src="avatar.url" />
            <AvatarFallback>{{ shortName }}</AvatarFallback>
        </Avatar>
        <div>
            <p class="text-sm font-medium leading-none">{{ name }}</p>
            <p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
        </div>
    </div>

</template>

<style></style>