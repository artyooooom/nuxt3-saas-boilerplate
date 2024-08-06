<script setup lang="ts">

import { isAuthorized } from '~/middleware/isAuthorized'

definePageMeta({
  layout: 'dashboard',
  activeTab: 'subscription',
  middleware: [isAuthorized]
})

const $store = useNuxtApp()

const userData: any = $store.$userData

const { data: productData } = await useFetch('/api/getProductById', {
  method: 'post',
  body: {
    productId: userData.supabase.product_id,
  }
})

</script>

<template>
  <!-- _*: add the contents for your user's subscription dashboard page  -->
  <div class="block space-y-4 md:flex md:space-x-4">
    <Card class="w-full">
      <div class="flex justify-between items-center">
        <div>
          <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle class="text-sm font-medium">
              Your subscription status:
            </CardTitle>
          </CardHeader>
          <CardContent>
              <div class="text-2xl font-bold">
                {{ userData.supabase.subscription ? 'Subscribed' : 'No subscription' }}
              </div>
              <p class="text-xs text-muted-foreground" v-if="productData">
                {{ productData.name }}
              </p>
  
          </CardContent>
        </div>
        <div class="p-6">
          <span>{{ productData?.price_formatted }}</span>
        </div>
      </div>
      
    </Card>
  </div>

</template>