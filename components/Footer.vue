<template lang="">
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="footer-logo">
                        <img src="@/assets/images/logo.png" alt="">
                            <p class="footer-des">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by</p>
                        
                            <div class="social">
                                <span><img src="@/assets/images/facebook.png" alt=""></span>
                                <span><img src="@/assets/images/twitter.png" alt=""></span>
                                <span><img src="@/assets/images/instagram.png" alt=""></span>
                                <span><img src="@/assets/images/youtube.png" alt=""></span>
                            </div>
                
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6 class="footer-titles">About</h6>       
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Faqs</li>
                    </ul>             
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6 class="footer-titles">Pages</h6>       
                    <ul>
                        <li><nuxt-link to="/PrivacyPolicy">Privacy Policy</nuxt-link></li>
                        <li>Help Center</li>
                        <li>Refund Policy</li>
                    </ul>            
                </div>
                <div class="col-12 col-sm-6 col-lg-4 store">
                    <h6 class="footer-titles">Get Apps On! &nbsp;&nbsp;&nbsp;&nbsp;</h6>                             
                        <button class="active"> <font-awesome-icon icon="fa-brands fa-apple " class="mx-3" />Apps Store</button>                
                        <button> <font-awesome-icon icon="fa-brands fa-google-play"  class="mx-3"  />Google Play</button>                          
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