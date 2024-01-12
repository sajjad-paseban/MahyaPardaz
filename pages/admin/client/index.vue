<script>
import ClientDataGrid from '@/datagrid/client.datagrid.vue'
import Card from '@/components/Card.vue'
export default defineComponent({
    name: 'ClientIndexPage',
    components:{
        Card,
        ClientDataGrid
    },
    data(){
        return {
            buttons: [
                {title: 'مشتری جدید', link: '/admin/client/create'}
            ]
        }
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
                مدیریت مشتریان
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'لیست مشتریان'">
                <ClientDataGrid />     
            </Card>
        </div>
    </div>
</template>