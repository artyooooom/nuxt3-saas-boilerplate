<script setup lang="ts">
    import type SupportProps from './types'

    defineProps<SupportProps>()
</script>

<template>
    <div v-html="code"></div>
</template>