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
  email: z.string().email(),
  password: z.string().min(2).max(50)
}))

const { toast } = useToast()
const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: 'agasparyan0000@gmail.com',
    password: '123123'
  }
})

const supabase = useSupabaseClient()

const onSubmit = form.handleSubmit(async (values) => {
  try {
    
    console.clear()
    let { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password
      })
      if(error) throw error
      
      useRouter().push('/dashboard')
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

    
      // if(error) console.log(error.message)
      // if(error) return toast({
      //   title: 'dwadkak',
      //   description: 'There was a problem with your request.',
      //   variant: 'destructive',
      //   action: h(ToastAction, {
      //     altText: 'Try again',
      //   }, {
      //     default: () => 'Try again',
      //   }),
      // });

      // console.log("🚀 ~ onSubmit ~ data:", data)
  

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