<template>
    <div class="our-services" id="our-services">
        <div class="container">
            <h2 class="about-title">{{ $t("Services.Our_Services") }}</h2>
            <p class="serices-description">{{ $t("Services.serices_des") }}</p>
        
                    
            <no-ssr> <!-- important to add no-ssr-->
                <carousel :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:4,nav:true}}"  :nav="true" :dots="false">
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/>
                            </div>
                        <h6 class="service-title">{{ $t("Services.Hotel_reservations") }}</h6>
                        <p class="service-des ">{{ $t("Services.Hotel_reservations_des") }}</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="service-icon"/>
                            </div>
                        <h6 class="service-title">{{ $t("Services.flight_reservations") }}</h6>
                        <p class="service-des ">{{ $t("Services.flight_reservations_des") }}</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/>
                            </div>
                        <h6 class="service-title" style="direction: rtl;">{{ $t("Services.Medical_Tourism") }}</h6>
                        <p class="service-des ">{{ $t("Services.Medical_Tourism_des") }}</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <!-- <font-awesome-icon icon="fa-solid fa-plane" class="service-icon"/> -->
                                <font-awesome-icon icon="fa-solid fa-car" class="service-icon"/>
                            </div>
                        <h6 class="service-title">{{ $t("Services.Tourist_trips_by_private_car") }}</h6>
                        <p class="service-des ">{{ $t("Services.Tourist_trips_by_private_car_des") }}</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <!-- <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/> -->
                                <font-awesome-icon icon="fa-solid fa-people-group" class="service-icon"/>    
                            </div>
                        <h6 class="service-title">{{ $t("Services.Tourist_trips_with_groups") }}</h6>
                        <p class="service-des ">{{ $t("Services.Tourist_trips_with_groups_des") }}</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <font-awesome-icon icon="fa-solid fa-plane" class="service-icon"/>
                            </div>
                        <h6 class="service-title">{{ $t("Services.Transfers_and_tours") }}</h6>
                        <p class="service-des ">{{ $t("Services.Transfers_and_tours_des") }}</p>
                        </div>
                    </div>
                    <div class="service mx-2">
                        <div>
                            <div class="service-icon-container">
                                <!-- <font-awesome-icon icon="fa-solid fa-hotel" class="service-icon"/> -->
                                <font-awesome-icon icon="fa-solid fa-people-roof" class="service-icon"/>
                            </div>
                        <h6 class="service-title">{{ $t("Services.Organizing_exhibitions") }}</h6>
                        <p class="service-des ">{{ $t("Services.Organizing_exhibitions_des") }}</p>
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
    .service-icon{
        height: 1.8em;
        color: #b288e0;
    }
</style>