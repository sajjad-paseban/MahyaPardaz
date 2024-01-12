<script>

import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import * as yup from 'yup'
import Input from '@/components/form/Input.vue'
import Number from '@/components/form/Number.vue'
import Textarea from '@/components/form/Textarea.vue'
import BtnRound from '@/components/BtnRound.vue'
import { edit, getOne } from '@/services/address.service'
import Swal from 'sweetalert2'
export default defineComponent({
    name: 'AddressEditForm',
    data(){

        //validation with yup
        const schema = yup.object({
            text: yup.string().required("فیلد آدرس اجباری می باشد"),
            phone: yup.string().required("فیلد شماره تماس اجباره می باشد"),
            fax: yup.string().required("فیلد فکس اجباری می باشد"),
        })

        return {
            form:{
                schema,
                params:{
                    id: null,
                    text: null,
                    phone: null,
                    fax: null
                },
                errors: null,
                disable: false
            },
        }
    },
    async beforeCreate(){
        const id = this.$route.params.id
        const res = await getOne(id).then(res => res)
        if(res && res.status == 200){
            this.form.params.id = res.data.entities.address.id
            this.form.params.text = res.data.entities.address.text
            this.form.params.phone = res.data.entities.address.phone
            this.form.params.fax = res.data.entities.address.fax
        }
    },
    methods: {
        async handleSubmit(form, {resetForm}){
            this.form.disable = true
            this.form.errors = null
            const res = await edit(this.form.params.id,form).then(res => res)
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
                navigateTo('/admin/address')
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
        Number,
        Textarea,
        BtnRound
    }
})
</script>

<template>
    <Form :validation-schema="form.schema" @submit="handleSubmit" class="p-2">
        <div class="form-group">
            <Input @model="val => form.params.text = val" :value="form.params.text" label="آدرس" :dataLang="'fa'" name="text" id="text" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="text" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.text">
                {{ form.errors?.text[0] }}
            </span>
        </div>
        <div class="form-group my-2">
            <Number @model="val => form.params.phone = val" :value="form.params.phone" label="شماره تماس" :dataLang="'fa'" name="phone" id="phone" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="phone" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.phone">
                {{ form.errors?.phone[0] }}
            </span>
        </div>
        <div class="form-group my-2">
            <Number @model="val => form.params.fax = val" :value="form.params.fax" label="فکس" :dataLang="'fa'" name="fax" id="fax" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="fax" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.fax">
                {{ form.errors?.fax[0] }}
            </span>
        </div>
        
        <div class="row mt-4  justify-content-start">
            <div class="col-auto">
                <button class="btn btn-sm btn-outline-primary" :class="{disabled: form.disable}" type="submit" role="button">
                    ویرایش آدرس
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