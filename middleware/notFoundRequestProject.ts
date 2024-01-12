import { get_project } from './../services/project.service';
export default defineNuxtRouteMiddleware(async (to, from) =>{
    const res = await get_project(<string>to.params.slug).then(res => res)
    if(res && res.status == 200)
        return true
    else
        return navigateTo('/404')
})