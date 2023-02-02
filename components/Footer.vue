<template lang="">
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="footer-logo">
                        <img src="@/assets/images/logo.png" alt="">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by</p>
                        
                            <div class="social">
                                <span><img src="@/assets/images/facebook.png" alt=""></span>
                                <span><img src="@/assets/images/twitter.png" alt=""></span>
                                <span><img src="@/assets/images/instagram.png" alt=""></span>
                                <span><img src="@/assets/images/youtube.png" alt=""></span>
                            </div>
                
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6>About</h6>       
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Faqs</li>
                    </ul>             
                </div>
                <div class="col-12 col-sm-6 col-lg-2">
                    <h6>Pages</h6>       
                    <ul>
                        <li><nuxt-link to="/PrivacyPolicy">Privacy Policy</nuxt-link></li>
                        <li>Help Center</li>
                        <li>Refund Policy</li>
                    </ul>             
                    
                </div>
                <div class="col-12 col-sm-6 col-lg-4 store">
                    <h6>Get Apps On! &nbsp;&nbsp;&nbsp;&nbsp;</h6>     
                        
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
.footer{
    background-color: #6C429A   ;
    padding-top: 8.688rem;
    padding-bottom: 5rem;
}    
.footer-logo{
    width: 90%;
}
p,h6{
    font-size: 1.375rem;
    color: #FFF;
}
h6{
    padding-top: 3rem;
    font-size: 1.875rem;
    
}
p{
    padding-top: 2.188rem;
    font-size: 1.563rem;

}
/* .social {
    display: inline-block;
} */
.social span{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.438rem;
    height: 3.438rem;
    border-radius: 10px;
    background-color: rgba(255, 255, 255,0.12);

}
ul{
    margin: 2.813rem 0;
    padding: 0;
    list-style: none;
}
ul li, ul li a{
    font-size: 1.563rem;
    letter-spacing: 0px;
    margin-top: 1rem;
    color: #FFFFFF;
    opacity: 0.5;
}
a{
    text-decoration: none;
}
 button{
    border-radius: 15px;
    border: 1px solid #FFF;
    width: 13.75rem;
    height:  5.313rem;
    background-color: transparent;
    opacity: 1;
    font-size: 1.388rem;
    margin: 5px 0;
    color: #FFF;


}
 button.active{
    background-color: #97D3BF;
    margin: 2.813rem 0 0 0 ;
    border: none;

}
.store{
    text-align: right;
}
@media screen and (max-width:820px) {
    .footer{
        text-align: center;
        padding-top: 4.688rem;

    }
    .footer-logo{
        width: 100%;
    }
}
</style>