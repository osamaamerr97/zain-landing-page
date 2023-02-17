<template >
    <div class="Be-Our-Agent position-relative">
        <div class="container-fluid px-md-5">
            <div class="content py-5 px-3 px-md-5">
                <div class="row align-items-center px-md-5">
                    <div class="col-12 col-md-8 text-white">
                        <h2 class="fw-bold  mb-3">{{ $t("Contact.BeOurAgent") }}</h2>
                        <p>{{ $t("Contact.BeOurAgent_des1") }}</p>
                        <p>{{ $t("Contact.BeOurAgent_des2") }}</p>
                        <p>{{ $t("Contact.BeOurAgent_des3") }}</p>
                        <p>{{ $t("Contact.BeOurAgent_des4") }}</p>
                        <nuxt-link class="be_our_agent" :to="localePath('/#contact')">{{ $t("Contact.BeOurAgent") }}</nuxt-link>
                    </div>
                    <div class="col-12 col-md-4 img-container">
                        <img src="~/assets/images/Layer 1 copy.png" class="w-80" alt="">
                    </div>
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
.w-80{
    width: 80%;
}
.Be-Our-Agent .content{
    /* height: 400px; */
    background-color: #97D3BF ;
    border-radius: 50px;
    text-align: justify;    
}    
.Be-Our-Agent .content h2{
    font-size: 2rem;
    text-align: center;

}
.Be-Our-Agent .img-container{
    text-align: right;
}
.Be-Our-Agent .img-container:dir(rtl){
    text-align: left;
}
@media screen and (min-width:768px) {
    .Be-Our-Agent .content h2{
        text-align: left;
    }
    .Be-Our-Agent .content h2:dir(rtl){
        text-align: right;
    }
}
@media screen and (max-width:768px) {
    .Be-Our-Agent .img-container,
    .Be-Our-Agent .img-container:dir(rtl){
    text-align: center;
    }
}
.Be-Our-Agent::after{
    content: '';
    width: 100%;
    height: 80px;
    background-color: #6C429A;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -2;
}    
.be_our_agent {
    display: block;
    text-align: center;
    border-radius: 40px;
    background-color: #fff;
    opacity: 1;
    margin: 5px 0;
    color: #97D3BF;
    padding: 15px 0;
    font-weight: 400;
    font-size: 18px;
    border: 1px solid #fff;
    width: 170px;
}
.be_our_agent:hover {
    
    background-color: transparent;
    color: #fff;
}
</style>