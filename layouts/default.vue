<script lang="ts" setup>
  import LandingHeader from '@/components/blocks/landing-header/LandingHeader.vue';
  import { type ButtonProps, type NavigationLinkProps } from '@/components/blocks/types'

  const appConfig = useAppConfig()

  const linksData: NavigationLinkProps[] = [{
    label: 'Pricings',
    isActive: true
  }, {
    label: 'Features'
  }]

  const buttonsData: ButtonProps[] = [{
    label: 'Example',
    variant: 'destructive'
  }, {
    label: 'Example',
    variant: 'outline'
  }]
  
</script>

<template>
  <div>
    <LandingHeader v-bind="appConfig" :links="linksData" :buttons="buttonsData"/>
    <slot />
  </div>
</template>

<style scoped></style>
