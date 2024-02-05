<script>

import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import * as yup from 'yup'
import Input from '@/components/form/Input.vue'
import Textarea from '@/components/form/Textarea.vue'
import Email from '@/components/form/Email.vue'
import FileUpload from '@/components/form/FileUpload.vue'
import { edit_base_info, base_info } from '@/services/index.service'
import Swal from 'sweetalert2'
import VueTags from '@/components/VueTags.vue'
export default defineComponent({
    name: 'SettingForm',
    data(){

        //validation with yup
        const schema = yup.object({
            banner_title: yup.string().required("فیلد عنوان بنر اجباری می باشد"),
            banner_description: yup.string().required("فیلد توضیحات بنر اجباری می باشد"),
            seo_title: yup.string().required("فیلد عنوان سئو اجباری می باشد"),
            seo_description: yup.string().required("فیلد توضیحات سئو اجباری می باشد"),
            email: yup.string().required("فیلد پست الکترونیکی اجباری می باشد").email("پست الکترونیک معتبر نمی باشد"),
        })

        return {
            form:{
                schema,
                params:{
                    banner_title: null,
                    banner_description: null,
                    seo_title: null,
                    seo_description: null,
                    email: null,
                    keywords: []
                },
                errors: null,
                disable: false
            },
        }
    },
    async beforeCreate(){
        const res = await base_info().then(res => res)
        if(res && res.status == 200){
            this.form.params.banner_title = res.data.entities.base_info.banner_title
            this.form.params.banner_description = res.data.entities.base_info.banner_description
            this.form.params.seo_title = res.data.entities.base_info.seo_title
            this.form.params.seo_description = res.data.entities.base_info.seo_description
            this.form.params.email = res.data.entities.base_info.email
            // this.form.params.keywords = res.data.entities.base_info.keywords.map((value, index) => value.title).join(',')
            this.form.params.keywords = res.data.entities.base_info.keywords.map((value, index) => value.title)
        }
    },
    methods: {
        async handleSubmit(form, {resetForm}){

            this.form.disable = true
            this.form.errors = null

            form['keywords'] = this.form.params.keywords
            const res = await edit_base_info(form).then(res => res)
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
                resetForm()
                setTimeout(()=>{
                    location.reload()
                },5000)
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
        Email,
        FileUpload,
        Textarea,
        VueTags
    },
})
</script>

<template>
    <Form :validation-schema="form.schema" @keydown.enter="$event.preventDefault()" @submit="handleSubmit" class="p-2">
        <div class="form-group my-2">
            <Input @model="val => form.params.banner_title = val" :value="form.params.banner_title" label="عنوان بنر" :dataLang="'fa'" name="banner_title" id="banner_title" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="banner_title" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.banner_title">
                {{ form.errors?.banner_title[0] }}
            </span>
        </div>
        <div class="form-group my-2">
            <Textarea @model="val => form.params.banner_description = val" :value="form.params.banner_description" label="توضیحات بنر" :dataLang="'fa'" name="banner_description" id="banner_description" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="banner_description" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.banner_description">
                {{ form.errors?.banner_description[0] }}
            </span>
        </div>
        <div class="form-group my-2">
            <Input @model="val => form.params.seo_title = val" :value="form.params.seo_title" label="عنوان سئو" :dataLang="'fa'" name="seo_title" id="seo_title" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="seo_title" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.seo_title">
                {{ form.errors?.seo_title[0] }}
            </span>
        </div>
        <div class="form-group my-2">
            <Textarea @model="val => form.params.seo_description = val" :value="form.params.seo_description" label="توضیحات سئو" :dataLang="'fa'" name="seo_description" id="seo_description" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="seo_description" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.seo_description">
                {{ form.errors?.seo_description[0] }}
            </span>
        </div>
        <div class="form-group my-2">
            <Email @model="val => form.params.email = val" :value="form.params.email" label="پست الکترونیکی" :dataLang="'fa'" name="email" id="email" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="email" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.email">
                {{ form.errors?.email[0] }}
            </span>
        </div>
        <div class="form-group my-3">
            <VueTags 
                :tags="form.params.keywords"
                @tags-changed="newTags => form.params.keywords = newTags"/>
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.keywords">
                {{ form.errors?.keywords[0] }}
            </span>
        </div>
        <div class="row mt-4  justify-content-start">
            <div class="col-auto">
                <button class="btn btn-sm btn-outline-primary" :class="{disabled: form.disable}" type="submit" role="button">
                    ذخیره اطلاعات
                </button>
            </div>
        </div>
    </Form>
</template>

<style scoped lang="scss">
    span[role=alert]{
        font-size: 12px;
        margin: 4px 0;
    }
</style>