<script>
import PostDataGrid from '@/datagrid/post.datagrid.vue'
import Card from '@/components/Card.vue'
export default defineComponent({
    name: 'PostIndexPage',
    components:{
        Card,
        PostDataGrid
    },
    data(){
        return {
            buttons: [
                {title: 'پست جدید', link: '/admin/post/create'}
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
                مدیریت پست ها
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'لیست پست ها'">
                <PostDataGrid />     
            </Card>
        </div>
    </div>
</template>