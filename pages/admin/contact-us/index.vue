<script>
import Card from '@/components/Card.vue'
import ContactUsDataGrid from '@/datagrid/contact-us.datagrid.vue'
export default defineComponent({
    name: 'ContactUsIndex',
    components:{
        Card,
        ContactUsDataGrid
    },
    data(){
        return {
            buttons: []
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
                ارتباط با ما
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'لیست تماس با ما'">
                <ContactUsDataGrid />
            </Card>
        </div>
    </div>
</template>