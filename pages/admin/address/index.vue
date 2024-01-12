<script>
import AddressDataGrid from '@/datagrid/address.datagrid.vue'
import Card from '@/components/Card.vue'
export default defineComponent({
    name: 'AddressIndexPage',
    components:{
        Card,
        AddressDataGrid
    },
    data(){
        return {
            buttons: [
                {title: 'آدرس جدید', link: '/admin/address/create'}
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
                مدیریت آدرس ها
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'لیست آدرس ها'">
                <AddressDataGrid />     
            </Card>
        </div>
    </div>
</template>