<script setup lang="ts">
import { ref } from 'vue'
import UserPreform from '@/components/forms/UserPreform.vue'
import UserAuthForm from '@/components/forms/UserAuthForm.vue'
import UserCreationForm from '@/components/forms/UserCreationForm.vue'
import { auth } from '@/middleware/auth'

const appConfig = useAppConfig()

definePageMeta({
  layout: false,
  middleware: [auth]
})

const background: string = '/images/bg.jpeg'

const quote = {
  content: `&ldquo;This library has saved me countless hours of work and
            helped me deliver stunning designs to my clients faster than
            ever before.&rdquo;`,
  author: 'Sofia Davis'
}

let formState = ref('preform')
let email = ref('')

let handleFormStateChange = (data: any) => {
  const { isAccountCreated, checkedEmail } = data

  email.value = checkedEmail
  if (!isAccountCreated) return formState.value = 'creation'

  return formState.value = 'auth'
}

let handleFormRender = computed(() => {
  switch (formState.value) {
    case 'preform':
      return UserPreform
    case 'auth':
      return UserAuthForm
    case 'creation':
      return UserCreationForm
  }
})

</script>

<template>
  <div
    class="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900"
        :style="{ backgroundImage: `url(${background})`, backgroundSize: 'cover', filter: 'brightness(0.25)' }" />
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
            Enter the dashboard
          </h1>
          <p class="text-sm text-muted-foreground">
            Fill your email below to proceed
          </p>
        </div>

        <!-- Conditionally render forms based on formState -->
        <component :is="handleFormRender" @change-form-state="handleFormStateChange" :email="email"/>

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
