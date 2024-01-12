<script>
import ContactUsDatagrid from '@/datagrid/contact-us.datagrid.vue';
import Card from '@/components/Card.vue';
import CardInfo from '@/components/CardInfo.vue';
import { DocumentIcon, ComputerDesktopIcon, UserIcon, MapIcon } from '@heroicons/vue/24/outline'
export default defineComponent({
    name: 'index-admin',
    components: {
        ContactUsDatagrid,
        Card,
        CardInfo,
        DocumentIcon,
        ComputerDesktopIcon,
        UserIcon,
        MapIcon
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
                داشبورد
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-lg-2 col-10 my-2 my-lg-0 mx-1">
            <CardInfo data-color="danger" :amount="0" title="پست ها">
                <DocumentIcon class="h-3" />
            </CardInfo>
        </div>
        <div class="col-lg-2 col-10 my-2 my-lg-0 mx-1">
            <CardInfo data-color="warning" :amount="10" title="پروژه ها">
                <ComputerDesktopIcon class="h-3" />
            </CardInfo>
        </div>
        <div class="col-lg-2 col-10 my-2 my-lg-0 mx-1">
            <CardInfo data-color="primary" :amount="25" title="مشتریان">
                <UserIcon class="h-3" />
            </CardInfo>
        </div>
        <div class="col-lg-2 col-10 my-2 my-lg-0 mx-1">
            <CardInfo data-color="success" :amount="3" title="آدرس ها">
                <MapIcon class="h-3" />
            </CardInfo>
        </div>
    </div>
    <div class="custom-row justify-content-center my-2">
        <div class="col-10 col-lg-9">
            <Card title="ارتباط با ما">
                <ContactUsDatagrid />
            </Card>
        </div>
    </div>
</template>