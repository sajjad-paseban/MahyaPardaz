<script>
import Card from '@/components/Card.vue'
import SettingForm from '@/forms/setting.form.vue'
export default defineComponent({
    name: 'SettingIndex',
    components: {
        Card,
        SettingForm
    },
    data(){
        return {
            buttons: [
 
            ],

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
                تنظیمات
            </h2>
        </div>
    </div>

    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card title="مشخصات سایت">
                <SettingForm />
            </Card>      
        </div>
    </div>
</template>