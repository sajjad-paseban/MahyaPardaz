<script>
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import ProjectEditForm from '@/forms/project/edit.form.vue'
import UploadMediaForm from '@/forms/project/upload-media.form.vue'
export default defineComponent({
    name: 'ProjectEditPage',
    components:{
        Card,
        Modal,
        ProjectEditForm,
        UploadMediaForm
    },
    data(){
        return {
            uploadFileModal:{
                buttons: [
                    {
                        title: 'بستن',
                        onClick: () => this.uploadFileModal.showModal = false
                    }
                ],
                title: 'آپلود فایل',
                showModal: false    
            },
            
            buttons: [
                {
                    title: 'برگشت',
                    link: '/admin/project'
                },
                {
                    title: 'آپلود فایل',
                    onClick: () => this.uploadFileModal.showModal = true
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
                مدیریت پروژه ها - ویرایش
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'ویرایش پروژه'">
                <ProjectEditForm />
            </Card>
        </div>
    </div>
    <Modal v-if="uploadFileModal.showModal" :title="uploadFileModal.title" :buttons="uploadFileModal.buttons">
        <UploadMediaForm />
    </Modal>
</template>