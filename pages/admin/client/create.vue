<script>
import Card from '@/components/Card.vue'
import ClientCreateForm from '@/forms/client/create.form.vue'
export default defineComponent({
    name: 'ClientCreatePage',
    components:{
        Card,
        ClientCreateForm
    },
    data(){
        return {
            buttons: [
                {
                    title: 'برگشت',
                    link: '/admin/client'
                }
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
                مدیریت مشتریان - جدید
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'مشتری جدید'">
                <ClientCreateForm />
            </Card>
        </div>
    </div>
</template>