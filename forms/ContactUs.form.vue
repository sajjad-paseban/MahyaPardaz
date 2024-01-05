<script>

import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import * as yup from 'yup'
import Input from '@/components/form/Input.vue'
import Number from '@/components/form/Number.vue'
import Textarea from '@/components/form/Textarea.vue'
import BtnRound from '@/components/BtnRound.vue'
import { create } from '@/services/contact-us.service'
import Swal from 'sweetalert2'
export default defineComponent({
    name: 'ContactUsForm',
    data(){

        //validation with yup
        const schema = yup.object({
            full_name: yup.string().required("فیلد نام و نام خانوادگی اجباری می باشد"),
            mobile: yup.string().required("فیلد شماره همراه اجباره می باشد"),
            description: yup.string().required("فیلد توضیحات اجباری می باشد").min(20,"طول فیلد توضیحات می بایست حداقل 20 کاراکتر باشد"),
        })

        return {
            form:{
                schema,
                params:{
                    full_name: null,
                    mobile: null,
                    description: null
                },
                errors: null,
                disable: false
            },
        }
    },
    methods: {
        async handleSubmit(form, {resetForm}){
            this.form.disable = true
            this.form.errors = null
            const res = await create(form).then(res => res)
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
                resetForm()
            }else{
                Toast.fire({title: res.data.message, icon: 'error'})
                this.form.errors = res.data.errors
            }

            this.form.disable = false

        }
    },
    components: {
        Form,
        ErrorMessage,
        Input,
        Number,
        Textarea,
        BtnRound
    }
})
</script>

<template>
    <Form :validation-schema="form.schema" @submit="handleSubmit" class="my-5">
        <div class="row justify-content-center">
            <div class="col-lg-auto col-12 px-5 py-2 py-lg-0 px-lg-2">
                <Number @model="val => form.params.mobile = val" :value="form.params.mobile" label="شماره همراه" :dataLang="'fa'" name="mobile" id="mobile" />
                <div class="d-flex justify-content-end">
                    <ErrorMessage class="text-danger" name="mobile" />
                    <span style="direction: rtl;font-size: 12px;" class="text-danger" v-if="form.errors?.mobile">
                        {{ form.errors?.mobile[0] }}
                    </span>
                </div>
            </div>
            <div class="col-lg-auto col-12 px-5 py-2 py-lg-0 px-lg-2">
                <Input @model="val => form.params.full_name = val" :value="form.params.full_name" label="نام و نام خانوادگی" :dataLang="'fa'" name="full_name" id="full_name" />
                <div class="d-flex justify-content-end">
                    <ErrorMessage class="text-danger" name="full_name" />
                    <span style="direction: rtl;font-size: 12px;" class="text-danger" v-if="form.errors?.full_name">
                        {{ form.errors?.full_name[0] }}
                    </span>
                </div>
            </div>
        </div>
        <div class="row mt-2 justify-content-center">
            <div class="col-lg-3 col-12 px-5 py-2 py-lg-0 px-lg-3">
                <Textarea @model="val => form.params.description = val" :value="form.params.description" label="توضیحات" :dataLang="'fa'" name="description" id="description" />
                <div class="d-flex justify-content-end">
                    <ErrorMessage class="text-danger" name="description" />
                    <span style="direction: rtl;font-size: 12px;" class="text-danger" v-if="form.errors?.description">
                        {{ form.errors?.description[0] }}
                    </span>
                </div>
            </div>
        </div>
        <div class="row mt-2 justify-content-center">
            <div class="col-auto">
                <BtnRound title="ثبت اطلاعات" v-if="!form.disable" :is-submit="true" :is-primary="true" />
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