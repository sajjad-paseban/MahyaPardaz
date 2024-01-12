export default defineNuxtRouteMiddleware( (to, from) =>{

    if(process.client){
        if(to.fullPath.includes('admin')){
            if(!localStorage.SESS_COK){
                location.replace('/login')
            }
        }
        return true
    }

})