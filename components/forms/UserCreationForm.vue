<script setup lang="ts">

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useToast } from '@/components/ui/toast/use-toast'
import { ToastAction } from '@/components/ui/toast'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

let props = defineProps<{ email: string }>()

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string().min(2).max(50),
  confirmPassword: z.string().min(2).max(50),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You have to agree to our terms & conditions'
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
}))

const { toast } = useToast()
const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: props.email
  },
})

const supabase = useSupabaseClient()

let isDisabled = ref(false);

const onSubmit = form.handleSubmit(async (values) => {
  try {

    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password
    })

    if (error) throw error

    $fetch('/api/updateAccountCreationStatus', {
      method: 'post',
      body: {
        email: values.email,
      }
    })

    isDisabled.value = true
    return toast({
      title: 'Success',
      description: 'Check your email for confirmation link!',
    });


  } catch (e: any) {
    return toast({
      title: 'Problem occured',
      description: e.message,
      variant: 'destructive',
      action: h(ToastAction, {
        altText: 'Try again',
      }, {
        default: () => 'Try again',
      }),
    });
  }

})

</script>

<template>

  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem class="mb-3">
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Email" v-bind="componentField" autocomplete="off" class="focus:outline-none"
            disabled />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem class="mb-3">
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Password" v-bind="componentField" autocomplete="off" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="confirmPassword">
      <FormItem class="mb-3">
        <FormLabel>Repeat password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Repeat password" v-bind="componentField" autocomplete="off" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ value, handleChange }" name="terms">
      <FormItem>
        <div class="items-top flex gap-x-2">
          <FormControl>
            <Checkbox id="terms" :checked="value" @update:checked="handleChange" />
          </FormControl>
          <div class="grid gap-1.5 leading-none">
            <label for="terms"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Accept terms and conditions
            </label>
            <p class="text-xs text-muted-foreground">
              You agree to our <a href="/terms-and-conditions" class="hover:underline" target="_blank">Terms and Conditions</a> and <a href="/privacy-policy" class="hover:underline" target="_blank">Privacy Policy</a>.
            </p>
          </div>
        </div>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full mt-3" :disabled="isDisabled">
      Create an account
    </Button>
  </form>

</template>