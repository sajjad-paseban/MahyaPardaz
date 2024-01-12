<script>
import Card from '@/components/Card.vue'
import ClientEditForm from '@/forms/client/edit.form.vue'
export default defineComponent({
    name: 'ClientEditPage',
    components:{
        Card,
        ClientEditForm
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
                مدیریت مشتریان - ویرایش
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'ویرایش مشتری'">
                <ClientEditForm />
            </Card>
        </div>
    </div>
</template>