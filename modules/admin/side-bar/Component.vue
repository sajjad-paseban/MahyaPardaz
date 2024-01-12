<script>
import { CubeIcon, DocumentIcon, ComputerDesktopIcon, MapIcon, UserIcon, MegaphoneIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
export default defineComponent({
    name: 'AdminSideBarComponent',
    components: {
        CubeIcon,
        DocumentIcon,
        ComputerDesktopIcon,
        MapIcon,
        UserIcon,
        MegaphoneIcon,
        Cog6ToothIcon,
    },
    data(){
        return {
            url: '',
        }
    },
    mounted(){
        this.url = location.href
    },
    methods:{
        selectItem(link= ''){
            this.url = '/admin'+link
        }
    }
})
</script>

<template>
    <ul>
        <li @click="selectItem('')" :class="{active: url.endsWith('/admin')}">
            <nuxt-link to="/admin">
                <CubeIcon />
                <span>
                    داشبورد
                </span>
            </nuxt-link>
        </li>
        <li @click="selectItem('/post')" :class="{active: url.includes('/admin/post')}">
            <nuxt-link to="/admin/post">
                <DocumentIcon />
                <span>
                    مدیریت پست ها
                </span>
            </nuxt-link>
        </li>
        <li @click="selectItem('/project')" :class="{active: url.includes('/admin/project')}">
            <nuxt-link to="/admin/project">
                <ComputerDesktopIcon />
                <span>
                    مدیریت پروژه ها
                </span>
            </nuxt-link>
        </li>
        <li @click="selectItem('/client')" :class="{active: url.includes('/admin/client')}">
            <nuxt-link to="/admin/client">
                <UserIcon />
                <span>
                    مدیریت مشتریان
                </span>
            </nuxt-link>
        </li>
        <li @click="selectItem('/address')" :class="{active: url.includes('/admin/address')}">
            <nuxt-link to="/admin/address">
                <MapIcon />
                <span>
                    مدیریت آدرس ها
                </span>
            </nuxt-link>
        </li>
        <li @click="selectItem('/contact-us')" :class="{active: url.includes('/admin/contact-us')}">
            <nuxt-link to="/admin/contact-us">
                <MegaphoneIcon />
                <span>
                    ارتباط با ما
                </span>
            </nuxt-link>
        </li>
        <li @click="selectItem('/setting')" :class="{active: url.includes('/admin/setting')}">
            <nuxt-link to="/admin/setting">
                <Cog6ToothIcon />
                <span>
                    تنظیمات
                </span>
            </nuxt-link>
        </li>
    </ul>
</template>

<style scoped lang="scss">
    ul{
        position: relative;
        z-index: 2;
        margin: 0;
        list-style: none;
        padding: 15px 10px;
        direction: rtl;
        color: #3B566E;
        li{
            border-radius: 6px;
            font-family: 'vazir';
            font-size: 15px;
            margin: 5px 0;
            a{
                color: #3B566E;
                display: flex;
                padding: 10px 15px;
                span{
                    position: relative;
                    top: 1px;
                    margin-right: 8px;
                }
                svg{
                    width: 25px;
                }
            }
            &.active{
                background-image: linear-gradient(115deg, rgb(98, 207, 244), rgb(44, 103, 242));
                a{
                    color: #fff;
                }
            }
            &:hover{
                background-color: rgba($color: #000000, $alpha: 0.04);
            }
        }
    }
</style>