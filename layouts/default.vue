

<template>
  <div>
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
  }
}
</script>