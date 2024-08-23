import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
    state: () => ({
        stripe: {} as any,
        supabase: {} as any,
        product: {} as any,
        price: {} as any,
    }),
    getters: {
        userData: (state) => {
            return {
                stripe: state.stripe,
                supabase: state.supabase
            }
        },
        productData: (state) => {
            return state.product
        },
        priceData: (state) => {
            return state.price
        }
    },
    actions: {
        async retrieveUserData() {
            try {

                const user = useSupabaseUser()

                if (user.value) {
                    const userData = await $fetch('/api/getUserByEmail', {
                        method: 'post',
                        body: {
                            email: user.value.email,
                        }
                    })

                    const customerData = await $fetch('/api/getCustomerById', {
                        method: 'post',
                        body: {
                            customer_id: userData.customer_id
                        }
                    })

                    this.stripe = customerData
                    this.supabase = { ...user.value, ...userData }

                    return true;
                }
            } catch (e) {
                throw e
            }
        },
        async retrieveUsersProductData() {
            try {

                if (!this.supabase.product_id) return false

                const productData = await $fetch('/api/getProductById', {
                    method: 'post',
                    body: {
                        productId: this.supabase.product_id,
                    }
                })

                this.product = productData

                return true

            } catch (e) {
                console.log("🚀 ~ retrieveUsersProductData ~ e:", e)
                throw e
            }
        },
        async retrieveUsersPriceData() {
            try {

                if (!this.supabase.price_id) return false

                const priceData = await $fetch('/api/getPriceById', {
                    method: 'post',
                    body: {
                        priceId: this.supabase.price_id,
                    }
                })

                this.price = priceData

                return true

            } catch (e) {
                console.log("🚀 ~ retrieveUsersPriceData ~ e:", e)
                throw e
            }
        }
    }
});