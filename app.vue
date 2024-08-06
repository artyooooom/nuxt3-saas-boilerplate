<script setup lang="ts">

import Toaster from '@/components/ui/toast/Toaster.vue'

</script>

<template>
  <NuxtLoadingIndicator style="background: hsl(var(--primary));"/>
  <NuxtLayout>
    <Toaster />
    <NuxtPage />
  </NuxtLayout>

</template>