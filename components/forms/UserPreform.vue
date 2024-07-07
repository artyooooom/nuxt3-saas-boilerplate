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

const formSchema = toTypedSchema(z.object({
  email: z.string().email()
}))
const { toast } = useToast()

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: 'agasparyan0000@gmail.com',
  }
})

const emit = defineEmits<{
  (e: 'changeFormState', data: {
    isAccountCreated: boolean,
    checkedEmail: string,
}): void 
}>()

const onSubmit = form.handleSubmit(async (values) => {
  try {

    const responseData = await $fetch('/api/checkIfAccountExists', {
        method: 'post',
        body: { 
          email: values.email,
        }
    })

    if(!responseData) throw new Error('No account found with this email. Make sure you entered the same email as in the checkout')

    emit('changeFormState', {
      isAccountCreated: responseData.is_account_created,
      checkedEmail: values.email
    })
  
  } catch(e: any) {
      
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
              <Input type="text" placeholder="Email" v-bind="componentField" autocomplete="off" class="focus:outline-none" />
            </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <br>
    <Button type="submit" class="w-full">
      Continue
    </Button>
  </form>
</template>