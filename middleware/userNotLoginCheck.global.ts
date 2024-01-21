import { useAuthStore } from "@/store"

export default defineNuxtRouteMiddleware( (to, from) =>{
    if (process.client || process.browser){
        const store = useAuthStore()

        if(to.fullPath.includes('admin')){

            if(!store.isAuthenticated || store.token == ''){

                return navigateTo('/login')

            }
        }
    }

    return true
})