<script>
import { ChevronDownIcon, GlobeAltIcon, EllipsisVerticalIcon, XMarkIcon, ArrowLeftStartOnRectangleIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/16/solid'
export default defineComponent({
    name: 'HeaderAdminComponent',
    data(){
        return {
            showSideBar: false
        }
    },
    methods:{
        toggleShowSideBar(){
            this.showSideBar = !this.showSideBar
            this.$emit('showSideBar',this.showSideBar)
        }
    },
    components: {
        ChevronDownIcon,
        GlobeAltIcon,
        EllipsisVerticalIcon,
        XMarkIcon,
        ArrowLeftStartOnRectangleIcon,
        AdjustmentsHorizontalIcon,
    }
})
</script>

<template>
    <header>
        <!-- left-menu -->
        <ul>
            <li class="profile-item">
                <ChevronDownIcon style="width: 22px; position: relative; bottom: 5px" />
                <span>
                    سجاد پاسبان
                </span>
                <img src="/image/default-profile-logo.png" alt="">
                <div class="profile-item-dropdown">
                    <div class="profile-item-dropdown-cover">
                        <ul>
                            <li>
                                <nuxt-link to="/">
                                    <GlobeAltIcon />
                                    <b>
                                        مشاهده سایت
                                    </b>
                                </nuxt-link>
                            </li>
                            <li>
                                <a href="/admin/setting">
                                    <AdjustmentsHorizontalIcon />
                                    <b>
                                        تنظیمات
                                    </b>
                                </a>
                            </li>
                            <li>
                                <nuxt-link to="/admin/logout">
                                    <ArrowLeftStartOnRectangleIcon />
                                    <b>
                                        خروج از سایت
                                    </b>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>

        </ul>

        <!-- right-menu -->
        <ul class="right-menu">
            <li>
                <EllipsisVerticalIcon @click="toggleShowSideBar" v-if="!showSideBar" class="active" style="width: 30px;" />
                <XMarkIcon @click="toggleShowSideBar" v-if="showSideBar" class="active" style="width: 30px;" />
            </li>
            <li class="d-none d-xl-block">
                <span style="font-family: 'vazir'; position: relative; bottom: 5px;">
                    پنل مدیریت محیا پرداز یزد
                </span>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
    svg.active{
        &:active{
            border: 2px solid #3B566E;
            border-radius: 50px;
        }
    }
    header{
        background-color: #fff;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-height: 54px;
        border-bottom: 1px solid rgba($color: #3B566E, $alpha: 0.2);
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                margin: 0;
                padding: 5px 8px;        
                transition: all 300ms;
                user-select: none;
                color: #3B566E;
                cursor: pointer;
                &.profile-item{
                    position: relative;
                    .profile-item-dropdown{
                        position: absolute;
                        z-index: 2;
                        top: 45px;
                        left: 0;
                        padding-top: 20px;
                        width: 210px;
                        display: none;
                        .profile-item-dropdown-cover{
                            background-color: #fff;
                            border-radius: 3px;
                            padding: 2px 0;
                            box-shadow: 0px 3px 5px rgba($color: #000000, $alpha: 0.09);
                            ul{
                                li{
                                    a{
                                        display: flex;
                                        margin: 2px 0;
                                        text-align: right;
                                        direction: rtl;
                                        color: #3B566E;
                                        font-family: 'vazir';
                                        font-size: 14px;
                                        padding: 10px 14px;
                                        &:hover{
                                            background-color: rgba($color: #000000, $alpha: 0.05);
                                        }
                                        svg{
                                            width: 22px;
                                            position: relative; 
                                            bottom: 0px; 
                                            margin-left:5px;
                                        }
                                    }
                                    padding: 0;
                                }
                            }
                        }
                    }

                    &:hover{
                        background-color: rgba($color: #000000, $alpha: 0.05);
                        .profile-item-dropdown{
                            display: block;
                        }
                    }
                    border-radius: 5px;
                    span{
                        position: relative;
                        bottom: 14px;
                        padding-right: 6px;
                        font-size: 16px;
                        font-family: 'yekan';
                    }
                    img{
                        width: 40px;
                        height: 40px;
                        position: relative;
                        top: 2px;
                        object-fit: cover;
                        object-position: center center;
                        border-radius: 50px;
                    }            
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .right-menu{
            svg{
                display: none;
            }
        }
    }

</style>