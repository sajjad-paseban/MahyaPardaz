<script>
export default defineComponent({
    name: 'LogoutPage',
    beforeCreate(){
        console.log(1)
        localStorage.removeItem('SESS_COK')
        navigateTo('/')
    }

})
</script>

<template>
    
</template>