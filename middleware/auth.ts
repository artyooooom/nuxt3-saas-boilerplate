export let auth = defineNuxtRouteMiddleware((to, from) => {
    
    const user = useSupabaseUser()
    console.log(to.path)
    if(!user.value) {
        return navigateTo('/auth')
    }

    return

})