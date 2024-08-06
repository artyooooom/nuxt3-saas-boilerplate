// https://stackoverflow.com/questions/76355447/nuxt3-how-to-access-fetched-data-in-page-middleware
import { callWithNuxt } from "#app";

export let isAuthorized = defineNuxtRouteMiddleware(async (to, from) => {
    
    const user = useSupabaseUser()

    if (!user.value) {

        // if the client is not authorized and is trying to access any page in 
        // /dashboard - redirect to /auth page
        if (/^\/dashboard(\/.*)?$/.test(to.path)) {
            return navigateTo('/auth');
        }

        return

    }

    // if the client is authorized 
    // - getting his user data using two api requests
    if (user.value) {
        // if any errors occured while getting its data
        // redirect to main page
        try {

            if (to.path === '/auth') {
                return navigateTo('/dashboard')
            }

            return

        } catch (e) {
            if (to.path === '/auth') {
                return
            }

            return navigateTo('/')

        }
    }

})