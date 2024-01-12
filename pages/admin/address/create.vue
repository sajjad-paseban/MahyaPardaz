<script>
import Card from '@/components/Card.vue'
import AddressCreateForm from '@/forms/address/create.form.vue'
export default defineComponent({
    name: 'AddressCreatePage',
    components:{
        Card,
        AddressCreateForm
    },
    data(){
        return {
            buttons: [
                {
                    title: 'برگشت',
                    link: '/admin/address'
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
                مدیریت آدرس ها - جدید
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'آدرس جدید'">
                <AddressCreateForm />
            </Card>
        </div>
    </div>
</template>