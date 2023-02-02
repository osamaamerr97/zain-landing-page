<template>
    <div class="our-services">
        <div class="container">
            <h2 class="serices-title">Our Services</h2>
            <p class="serices-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        
                    
            <no-ssr> <!-- important to add no-ssr-->
                <carousel :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:4,nav:true}}"  :nav="true" :dots="false">
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="service-icon"/>
                            </div>
                        <h6 class="service-title">Features Name</h6>
                        <p class="service-des">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </carousel>
            </no-ssr>
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

</style>