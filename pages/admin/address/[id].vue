<script>
import Card from '@/components/Card.vue'
import AddressEditForm from '@/forms/address/edit.form.vue'
export default defineComponent({
    name: 'AddressEditPage',
    components:{
        Card,
        AddressEditForm
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
                مدیریت آدرس ها - ویرایش
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'ویرایش آدرس'">
                <AddressEditForm />
            </Card>
        </div>
    </div>
</template>