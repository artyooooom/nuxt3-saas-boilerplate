<script setup lang="ts">

import { isAuthorized } from '@/middleware/isAuthorized'
import { useUserStore } from '@/store/UserStore';


definePageMeta({
  layout: 'dashboard',
  activeTab: 'subscription',
  middleware: [isAuthorized]
})

const userStore: any = useUserStore()


// gets product data if it's not retrieved
if (Object.keys(userStore.productData).length === 0) await userStore.retrieveUsersProductData()

const product = userStore.productData
const user = userStore.userData

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
              {{ user.supabase.subscription ? 'Subscribed' : 'No subscription' }}
            </div>
            <p class="text-xs text-muted-foreground" v-if="product">
              {{ product.name }}
            </p>

          </CardContent>
        </div>
        <div class="p-6">
          <span>{{ product?.price_formatted }}</span>
        </div>
      </div>

    </Card>
  </div>

</template>