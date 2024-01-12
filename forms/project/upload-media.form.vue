<script>
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import Input from '@/components/form/Input.vue'
import FileUpload from '@/components/form/FileUpload.vue'
import TextArea from '@/components/form/Textarea.vue'
import CustomEditor from '@/editor/custom.editor.vue'
import { create_media, get_medias, delete_media } from '@/services/project.service'
import { api_base_url } from '@/helpers/function'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { ClipboardIcon } from '@heroicons/vue/24/outline'

export default defineComponent({
    name: 'ProjectUploadMediaForm',
    data(){

        //validation with yup
        const schema = yup.object({
            alt: yup.string().required("فیلد عنوان اجباری می باشد"),
        })

        return {
            files: [],
            api_base_url: api_base_url(),
            form:{
                schema,
                params:{
                    title: null,
                    media: null,
                },
                errors: null,
                disable: false
            },
        }
    },
    methods: {
        async copyUrlToClipboard(url){
            await navigator.clipboard.writeText(url);

            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-left',
                showConfirmButton: false,
                timer: 8000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }

            })

            Toast.fire({title: 'آدرس به کلیپ برد اضافه شد', icon:"success"})
        },
        async deleteMedia(id, index){
            const res = await delete_media(id).then(res => res)

            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-left',
                showConfirmButton: false,
                timer: 8000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            })


            if(res.status == 200){
                Toast.fire({title: res.data.message, icon:"success"})
                this.files.splice(index, 1)
            }else{
                this.form.errors = res.data.errors
            }
        },
        async handleSubmit(form, {resetForm}){
            this.form.disable = true
            this.form.errors = null
            
            const res = await create_media(this.form.params).then(res => res)
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-left',
                showConfirmButton: false,
                timer: 8000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            })

            if(res.status == 201){
                Toast.fire({title: res.data.message, icon:"success"})
                this.form.params.title = null
                this.form.params.media = null
                resetForm()
                this.files.push(
                    {
                        id: res.data.entities.media.id,
                        title: res.data.entities.media.title,
                        url: res.data.entities.media.url,
                    }
                )
            }else{
                this.form.errors = res.data.errors
            }

            this.form.disable = false

        }
    },
    components: {
        Form,
        ErrorMessage,
        Input,
        FileUpload,
        TextArea,
        CustomEditor,
        TrashIcon,
        ClipboardIcon,
    },
    async mounted(){
        const res = await get_medias().then(res => res)
        
        if(res.status == 200){
            this.files = res.data.entities.media
        }else{
            this.form.errors = res.data.errors
        }
    }
})
</script>

<template>
    <div class="upload-media-form">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                    آپلود
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                    فایل ها
                </button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active py-3" dir="ltr" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                
                <Form :validation-schema="form.schema" @submit="handleSubmit" class="p-2">
                    <div class="form-group">
                        <Input @model="val => form.params.title = val" :value="form.params.title" label="(alt)عنوان" :dataLang="'fa'" name="alt" id="alt" />
                        <ErrorMessage class="text-danger d-block" style="text-align: right;" name="alt" />
                        <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.title">
                            {{ form.errors?.title[0] }}
                        </span>
                    </div>
                    <div class="form-group my-3">
                        <FileUpload @model="val => form.params.media = val" :value="form.params.media" label="آپلود تصویر" :dataLang="'fa'" name="media" id="media" />
                        <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.media">
                            {{ form.errors?.media[0] }}
                        </span>
                    </div>

                    <div class="row mt-4  justify-content-start">
                        <div class="col-auto">
                            <button class="btn btn-sm btn-outline-primary" :class="{disabled: form.disable}" type="submit" role="button">
                                ذخیره
                            </button>
                        </div>
                    </div>
                </Form>

            </div>
            <div class="tab-pane fade py-3" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

                <div class="d-flex flex-wrap justify-content-center">
                    <div class="card m-2" style="width: 10rem;" v-for="(item, index) in files" :key="index">
                        <img class="card-img-top card-img" :src="api_base_url + item.url" :alt="item.title">
                        <div class="card-body p-0 px-2 pt-2">
                            <button class="button-14 mx-1" @click="deleteMedia(item.id, index)">
                                <TrashIcon class="h-3" style="width: 20px;position: relative;bottom: 2px;" />
                            </button>
                            <button class="button-14 mx-1" @click="copyUrlToClipboard(api_base_url + item.url)">
                                <ClipboardIcon class="h-3" style="width: 20px;position: relative;bottom: 2px;" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .upload-media-form{
        direction: rtl;
        ul{
            padding-right: 0;
            padding-left: 45px;
            button{
                font-family: 'yekan' !important;
                color: #3B566E !important;
                &.active{
                    color: rgb(44, 103, 242) !important;
                }
            }
        }

        .card-img{
            object-fit: cover;
            object-position: center center;
            height: 150px;
            width: 100%;
            border-radius: 0;
            border-bottom: 1px solid rgba($color: #3B566E, $alpha: 0.2);
        }
    }
</style>