<template lang="">
    <div class="footer py-5 pb-3">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="footer-logo logo mt-4">
                        <img src="@/assets/images/logo.png" alt="">
                            <p class="footer-des fs-6 mt-5">{{ $t("Footer.des") }}</p>
                        
                            <div class="social">
                                <span><img width="15px" src="@/assets/images/facebook.png" alt=""></span>
                                <span><img width="15px" src="@/assets/images/twitter.png" alt=""></span>
                                <span><img width="15px" src="@/assets/images/instagram.png" alt=""></span>
                                <span><img width="15px" src="@/assets/images/youtube.png" alt=""></span>
                            </div>
                
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6 class="footer-titles fs-3">{{ $t("Footer.About") }}</h6>       
                    <ul>
                        <li><nuxt-link class="fs-5" :to="localePath('/#about')">{{ $t("Footer.About_Us") }}</nuxt-link></li>
                        <li><nuxt-link class="fs-5" :to="localePath('/#contact')">{{ $t("Footer.Contact_Us") }}</nuxt-link></li>
                        <li><nuxt-link class="fs-5" :to="localePath('/#faqs')">{{ $t("Footer.Faqs") }}</nuxt-link></li>
  
                    </ul>             
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6 class="footer-titles fs-3">{{ $t("Footer.Pages") }}</h6>       
                    <ul>
                        <li><nuxt-link class="fs-5" :to="localePath('/PrivacyPolicy')">{{ $t("Footer.Privacy_Policy") }}</nuxt-link></li>
                        <li><nuxt-link class="fs-5" :to="localePath('/')">{{ $t("Footer.Help_Center") }}</nuxt-link></li>
                        <li><nuxt-link class="fs-5" :to="localePath('/')">{{ $t("Footer.Refund_Policy") }}</nuxt-link></li>

    
                    </ul>            
                </div>
                <div class="col-12 col-sm-6 col-lg-4 store">
                    <h6 class="footer-titles fs-3">{{ $t("Footer.Get_Apps_On") }} &nbsp;&nbsp;&nbsp;&nbsp;</h6>                             
                        <button class="active"> <font-awesome-icon icon="fa-brands fa-apple " class=" icon mx-1" /><span class="mx-1">{{ $t("Footer.Apps_Store") }} </span></button>
                        <button> <font-awesome-icon icon="fa-brands fa-google-play"  class="icon mx-1"  /><span class="mx-1">{{ $t("Footer.Google_play") }} </span></button>
                </div>
            </div>
            <div class="row mt-5 pt-3 mb-0 pb-0 border-top">
                <div class="col-lg-12 text-center">
                    <p class="mb-0 text-white">
                        © {{ new Date().getFullYear()}}  Zein. {{$t('Privacy.Made with by')}} <a class="copyright-link" href="https://namaa-solutions.com/" _target="blank">{{$t('Privacy.Namaa Solutions')}}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.border-top {
    border-color: rgba(255, 255, 255, 0.12) !important
}
</style>