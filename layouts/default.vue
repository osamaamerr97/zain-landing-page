

<template>
  <div :dir="getPageDirection">
    <NavbarHome/>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue';
import Footer from '../components/Footer.vue';

export default{
  comments:{
    NavbarHome,
    Footer
  },
  computed:{
    getPageDirection() {
      if (this.$i18n.locale == "ar") {
        return "rtl";
      }
      return "ltr";
    },
  }
}
</script>