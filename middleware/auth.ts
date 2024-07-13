export let auth = defineNuxtRouteMiddleware((to, from) => {

    const user = useSupabaseUser()

    if (!user.value && to.path === '/dashboard') {
        return navigateTo('/auth')
    }

    if (user.value && (to.path === '/auth' || to.path === '/create-account')) {
        return navigateTo('/dashboard')
    }

    return

})