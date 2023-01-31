<template lang="">
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-2 col-lg-4">
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
                <div class="col-12 col-sm-2 col-lg-2">
                    <h6>About</h6>       
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Faqs</li>
                    </ul>             
                </div>
                <div class="col-12 col-sm-2 col-lg-2">
                    <h6>Pages</h6>       
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Help Center</li>
                        <li>Refund Policy</li>
                    </ul>             
                    
                </div>
                <div class="col-12 col-sm-2 col-lg-4">
                    <h6>Get Apps On!</h6>       
                    <ul>
                        <li>
                            <button class="active"> <i class="fa-brands fa-apple"></i>Apps Store</button>
                        </li>
                        <li>
                            <button> <i class="fa-brands fa-google-play"></i>Apps Store</button>
                            
                        </li>
                    </ul>

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
    padding-bottom: 0.938rem;
}    
.footer-logo{
    width: 70%;
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
ul li{
    font-size: 1.563rem;
    letter-spacing: 0px;
    margin-top: 1rem;
    color: #FFFFFF;
    opacity: 0.5;
}
ul li button{
    border-radius: 15px;
    border: none;
    width: 13.75rem;
    height:  5.313rem;
    color: #FFF !important  ;
}
ul li button.active{
    background-color: #97D3BF;

}
</style>