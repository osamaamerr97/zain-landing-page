<template>
    <div>
        <HomeHead></HomeHead>
        <AboutUs></AboutUs>
        <OurServices></OurServices>
        <Destinations></Destinations>
        <Faqs></Faqs>
        <ContactUs></ContactUs>
        <BeOurAgent></BeOurAgent>

    </div>
</template>
<script>
import HomeHead from '@/components/HomeHead.vue';
import AboutUs from '@/components/AboutUs.vue';
import OurServices from '@/components/OurServices.vue';
import Destinations from '../components/Destinations.vue';
import Faqs from '../components/Faqs.vue';
import ContactUs from '../components/ContactUs.vue';
import BeOurAgent from '../components/BeOurAgent.vue';

export default {
    name:"landing-page",
    comments:{
        HomeHead,
        AboutUs,
        OurServices,
        Destinations,
        Faqs,
        ContactUs,
        BeOurAgent
        
    }

}
</script>
<style scoped>

</style>