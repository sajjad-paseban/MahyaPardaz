<template>
    <section class="services-section py-5">
        <div class="row justify-content-center flex-column-reverse flex-lg-row">
            <div class="col-12 col-lg-6 items d-flex flex-wrap justify-content-center justify-content-lg-end">
                <slot />
            </div>
            <div class="col-12 col-lg-6 intro justify-content-center align-self-center">
                <h2>
                    ارائه خدمات نرم افزاری در حوزه مدیریت شهری و شهرداری الکترونیک
                </h2>                
                <p>
                    خدمات و محصولات این شرکت پس از دو دهه فعالیت، در بیش از 150 پروژه در شهرهای مختلف کشور شامل شهرداری ها و سایر نهادهای خدمات شهری مورد استفاده قرار گرفته و به مرحله اجرا رسیده است.
                </p>

                <BtnRound to="/service" title="خدمات" :isPrimary="true" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .services-section{
        width: 100%;
        overflow: hidden;
        color: #3B566E;
        background-color: rgba(255, 255, 238, 0.3);
        .items{
            padding-left: 240px;
        }

        .intro{
            direction: rtl;
            padding-right: 15%;
            padding-left: 5%;
            font-family: 'yekan';            
            line-height: 1.5;
            p{
                font-size: 18px;
                text-align: justify;
            }
        }
    }
    
    @media screen and (max-width: 950px) {
        .intro{
            padding: 10% !important;
        }
        .items{
            padding-left: 0 !important;
        }
    }
</style>