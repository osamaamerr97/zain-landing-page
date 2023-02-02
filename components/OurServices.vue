<template>
    <div class="container-fluid">
        <div class="our-services">
            <h2>Our Services</h2>
            <p class="serices-des">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
           
          <div class="container">
                       
            <no-ssr> <!-- important to add no-ssr-->
              <carousel :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:4,nav:true}}"  :nav="true" :dots="false">
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-3">
                        <div>
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
            </carousel>
          </no-ssr>

          </div>


        </div>
    </div>
</template>
<script>

export default{
    data() {
        return {
            hotels:[1,2,3,4,5,6,7,8]
        }
    },
}
</script>
<style scoped>
.our-services{
    background-color:#FAF9FC;
    text-align: center;
    padding-top: 5.563rem;
    padding-bottom: 5.125rem;
}  
h2{
    margin: 0;
    font-size: 4.375rem;
    color: #484451;
}  
.serices-des{
    font-size: 1.625rem;
    margin: auto;
    margin-bottom: 3rem;
    width: 50%;
}
.service{
    background-color: #FFF;
    border-radius: 20px;
    /* width: 22.125rem; */
    height: 22.813rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
}
.icon-container{
    width: 6.563rem;
    height: 6.563rem;
    background-color: #6C429A;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
  margin: auto;
}
.icon{
  font-size: 2.813rem;
}
img{
    width: 3.563rem;
    height: 3.563rem;
}
.service-title{
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 1.563rem;
  color: #484451;

}
.sevice-des{
  font-size: 1.25rem;
  letter-spacing: 0px;

}

@media screen and (max-width:820px) {
    .our-services{
        padding-bottom: 5.125rem;
    }  
    .serices-des{
        width: 100%;
    }
}
</style>