<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  email: z.string(),
  password: z.string().min(2).max(50)
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem class="mb-3">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Email" v-bind="componentField" autocomplete="off" class="focus:outline-none" />
            </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Password" v-bind="componentField" autocomplete="off" />
            </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <br>
    <Button type="submit" class="w-full">
      Sign In
    </Button>
  </form>
</template>