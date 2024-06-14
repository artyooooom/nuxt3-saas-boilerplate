<script setup lang="ts">
  import UserAuthForm from '@/components/forms/UserAuthForm.vue'
  import { cn } from '@/lib/utils'

  const appConfig = useAppConfig()

  definePageMeta({
    layout: false
  })

  const background: string = '/images/bg.jpeg'
  
  const quote = {
    content: `&ldquo;This library has saved me countless hours of work and
            helped me deliver stunning designs to my clients faster than
            ever before.&rdquo;`,
    author: 'Sofia Davis'
  }

</script>

<template>

  <div class="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <a href="/create-account" :class="cn('absolute right-4 top-4 md:right-8 md:top-8',)">
      <Button variant="outline">
        Create an account
      </Button>
    </a>
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" :style="{ backgroundImage: `url(${background})`, backgroundSize: 'cover', filter: 'brightness(0.25)'}"/>
      <div class="relative z-20 flex items-center text-lg font-medium">
        <a href="/" target="_blank">
          <img v-if="appConfig.appLogo" :src="appConfig.appLogo" :alt="appConfig.appName" class="h-6 mr-3 sm:h-9" />
          {{ appConfig.appName }}
        </a>
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg" v-html="quote.content"></p>
          <footer class="text-sm">{{ quote.author }}</footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            Sign In
          </h1>
          <p class="text-sm text-muted-foreground">
            Fill the fields below to authorize to your account
          </p>
        </div>
        <UserAuthForm/>
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <a href="/terms" class="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>
          and
          <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  </div>
</template>