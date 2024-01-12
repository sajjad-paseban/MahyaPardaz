import { get_blog } from "~/services/blog.service"

export default defineNuxtRouteMiddleware(async (to, from) =>{
    const res = await get_blog(<string>to.params.slug)
    
    if(res && res.status == 200){
        return true
    }else{
        return navigateTo({path: '/404'})
    }
})