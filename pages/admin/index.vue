<script>
export default defineComponent({
    name: 'index-admin',
    components: {
        
    },
    beforeCreate(){
        definePageMeta({
            layout: 'admin-panel'
        })
    }
})
</script>

<template>
    <div class="custom-row justify-content-end">
        <div class="col-auto title mx-4">
            <h2>
                داشبورد
            </h2>
        </div>
    </div>
    <DetailSection  />
</template>