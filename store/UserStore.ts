import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
    state: () => ({
        lemonsqueezy: {} as any,
        supabase: {} as any,
        product: {} as any
    }),
    getters: {
        userData: (state) => {
            return {
                lemonsqueezy: state.lemonsqueezy,
                supabase: state.supabase
            }
        },
        productData: (state) => {
            return state.product
        }
    },
    actions: {
        async retrieveUserData() {
            try {

                const user = useSupabaseUser()

                if(user.value) {
                    const userData = await $fetch('/api/getUserByEmail', {
                        method: 'post',
                        body: {
                            email: user.value.email,
                        }
                    })
                        
                    const { data: customerData } = await $fetch('/api/getCustomerById', {
                        method: 'post',
                        body: {
                            customer_id: userData.customer_id
                        }
                    })
                    
                    this.lemonsqueezy = customerData
                    this.supabase = { ...user.value, ...userData }
        
                    return true;
                }
            } catch(e) {
                throw e
            }
        },
        async retrieveUsersProductData() {
            try {

                if(!this.supabase.product_id) return false
                
                const { data: productData } = await useFetch('/api/getProductById', {
                    method: 'post',
                    body: {
                        productId: this.supabase.product_id,
                    }
                })

                this.product = productData

                return true

            } catch(e) {
                console.log("🚀 ~ retrieveUsersProductData ~ e:", e)
                throw e
            }
        }
    }
});