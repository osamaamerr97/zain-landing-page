<template lang="">
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="footer-logo">
                        <img src="@/assets/images/logo.png" alt="">
                            <p class="footer-des">{{ $t("Footer.des") }}</p>
                        
                            <div class="social">
                                <span><img src="@/assets/images/facebook.png" alt=""></span>
                                <span><img src="@/assets/images/twitter.png" alt=""></span>
                                <span><img src="@/assets/images/instagram.png" alt=""></span>
                                <span><img src="@/assets/images/youtube.png" alt=""></span>
                            </div>
                
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6 class="footer-titles">{{ $t("Footer.About") }}</h6>       
                    <ul>
                        <li><nuxt-link to="/">{{ $t("Footer.About_Us") }}</nuxt-link></li>
                        <li><nuxt-link to="/">{{ $t("Footer.Contact_Us") }}</nuxt-link></li>
                        <li><nuxt-link to="/">{{ $t("Footer.Faqs") }}</nuxt-link></li>
  
                    </ul>             
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6 class="footer-titles">{{ $t("Footer.Pages") }}</h6>       
                    <ul>
                        <li><nuxt-link to="/PrivacyPolicy">{{ $t("Footer.Privacy_Policy") }}</nuxt-link></li>
                        <li><nuxt-link to="/">{{ $t("Footer.Help_Center") }}</nuxt-link></li>
                        <li><nuxt-link to="/">{{ $t("Footer.Refund_Policy") }}</nuxt-link></li>

    
                    </ul>            
                </div>
                <div class="col-12 col-sm-6 col-lg-4 store">
                    <h6 class="footer-titles">{{ $t("Footer.Get_Apps_On") }} &nbsp;&nbsp;&nbsp;&nbsp;</h6>                             
                        <button class="active"> <font-awesome-icon icon="fa-brands fa-apple " class=" icon mx-3" />{{ $t("Footer.Apps_Store") }} </button>                
                        <button> <font-awesome-icon icon="fa-brands fa-google-play"  class="icon mx-3"  />{{ $t("Footer.Google_play") }} </button>                          
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

</style>