<script setup>
    import { ref } from 'vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
    const { transparent } = defineProps({ transparent: Boolean })
    const dropMenuVisibilityState = ref(false)
    const changeDropMenuVisibilityState = () => dropMenuVisibilityState.value = !dropMenuVisibilityState.value 
</script>

<template>
    <div class="drop-down-buttons">
        <Bars3Icon @click="changeDropMenuVisibilityState" v-if="!dropMenuVisibilityState" class="h-3"/>
        <XMarkIcon @click="changeDropMenuVisibilityState" v-else class="h-3"/>    
    </div>
    <ul class="menu" :class="[transparent ? 'transparent' : '']">
        <li class="menu-item">
            <NuxtLink to="/">
                صفحه اصلی
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/project">
                پروژه های ما
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/about-us">
                درباره ما
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/service">
                خدمات ما
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/blog">
                بلاگ
            </NuxtLink>
        </li>
        <li class="menu-item menu-item-btn">
            <NuxtLink to="/contact-us">
                ارتباط با ما
            </NuxtLink>
        </li>
    </ul>
    <ul class="menu-sm" :class="[dropMenuVisibilityState ? 'visible' : '']">
        <li class="menu-item">
            <NuxtLink to="/">
                صفحه اصلی
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/project">
                پروژه های ما
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/about-us">
                درباره ما
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/service">
                خدمات ما
            </NuxtLink>
        </li>
        <li class="menu-item">
            <NuxtLink to="/blog">
                بلاگ
            </NuxtLink>
        </li>
        <li class="menu-item menu-item-btn">
            <NuxtLink to="/contact-us">
                ارتباط با ما
            </NuxtLink>
        </li>
    </ul>
</template>

<style scoped lang="scss">
    ul.menu{
        list-style: none;
        padding: 0;
        display: flex;
        font-family: yekan;
        font-size: 16px;
        direction: rtl;
        &.transparent{
            li{
                transition: background-color 300ms;
                &.menu-item-btn{
                    border: 1px solid #ffffff !important;
                    &:hover{
                        background-color: #ffffff;
                        a{
                            color: #4886ff !important;
                        }
                    }
                }
                a{
                    transition: color 300ms;
                    color: #ffffff !important;
                }
            }    
        }
        li.menu-item{
            margin: 0 10px;
            padding: 8px 0;
            
            &.menu-item-btn{
                border: 1px solid #4886ff;
                padding: 8px 25px;
                border-radius: 100px;
                text-align: center;
                a{
                    color: #4886ff;
                }
            }
            
            a{
                padding: 8px;
                color: #3b566e;
            }

        }    
    }

    ul.menu-sm{
        &.visible{
            display: block;
        }
        background-color: #ffffff;
        position: absolute;
        top: 62px;
        left: 0;
        right: 0;
        display: none;
        list-style: none;
        padding: 0;
        font-family: yekan;
        font-size: 15px;
        li.menu-item{
            border-bottom: 1px solid #f5f5f5;
            text-align: right;
            transition: background-color 300ms;
            &:hover{
                background-color: #f5f5f5;
            }
            a{
                display: block;
                padding: 14px 35px;
                color: #3b566e;
            }
        }
    }
    @media screen and (min-width: 950px) {
        .drop-down-buttons{
            display: none;
        }
        .menu-sm{
            display: none !important;
        }
    }
    @media screen and (max-width: 950px) {
        .menu{
            display: none !important;
        }
    }
</style>