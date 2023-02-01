<template>
    <div>
        <div class="head">
            <NavbarHome></NavbarHome> 
            <HomeHead></HomeHead>
        </div>
        <AboutUs></AboutUs>
        <OurServices></OurServices>
        <Destinations></Destinations>
        <Faqs></Faqs>
        <ContactUs></ContactUs>
        <Footer></Footer>

    </div>
</template>
<script>
import HomeHead from '@/components/HomeHead.vue';
import AboutUs from '@/components/AboutUs.vue';
import OurServices from '@/components/OurServices.vue';
import NavbarHome from '../components/NavbarHome.vue';
import Destinations from '../components/Destinations.vue';
import Faqs from '../components/Faqs.vue';
import ContactUs from '../components/ContactUs.vue';
import Footer from '../components/Footer.vue';

export default {
    comments:{
        NavbarHome,
        HomeHead,
        AboutUs,
        OurServices,
        Destinations,
        Faqs,
        ContactUs,
        Footer
    }

}
</script>
<style scoped>
 .head{
    background-image: url('../assets/images/background.png');
    background-position: center center;
    background-size: 100% 100%;
    padding-bottom: 8.313rem;

}  
</style>