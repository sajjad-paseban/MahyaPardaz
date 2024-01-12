<script>
import Card from '@/components/Card.vue'
import PostEditForm from '@/forms/post/edit.form.vue'
export default defineComponent({
    name: 'PostEditPage',
    components:{
        Card,
        PostEditForm
    },
    data(){
        return {
            buttons: [
                {
                    title: 'برگشت',
                    link: '/admin/post'
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
                مدیریت پست ها - ویرایش
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'ویرایش پست'">
                <PostEditForm />
            </Card>
        </div>
    </div>
</template>