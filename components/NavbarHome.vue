<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <nuxt-link class="navbar-brand" :to="localePath('/#home-head')">
              <div class="logo" >
                <img src="~/assets/images/oldlogo.png" alt="">
              </div>
            </nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav m-auto">
                <li class="nav-item">
                  <nuxt-link class="nav-link active-link" aria-current="page" :to="localePath('/#home-head')">{{ $t("navbar.Home") }}</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#about')">{{ $t("navbar.About_Us") }}</nuxt-link>

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#our-services')">{{ $t("navbar.Services") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#')">{{ $t("navbar.Services") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#destinations')">{{ $t("navbar.Destinations") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#')">{{ $t("navbar.Destinations") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/JoinOurTeam')">{{ $t("navbar.Be_Our_Agent") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#')">{{ $t("navbar.Be_Our_Agent") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#faqs')">{{ $t("navbar.Faqs") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/#')">{{ $t("navbar.Faqs") }}</nuxt-link> -->

                </li>
                <li  class="nav-item " v-for="locale in availableLocales" :key="locale.code">
                  <nuxt-link class="nav-link lang position-relative" :to="switchLocalePath(locale.code)">{{ locale.name === 'Arabic'? "العربية" :  locale.name}}</nuxt-link>
                </li>
              </ul>

              
              <nuxt-link class="navbar-contact-btn" :to="localePath('/#contact')">{{ $t("navbar.Contact_Us") }}</nuxt-link>
              <!-- <button class="navbar-contact-btn">{{ $t("navbar.Contact_Us") }}</button> -->


            </div>
          </div>
        </nav>
    </div>
</template>
<script>
export default {
  name:"NavbarHome",
  data() {
        return {
            // language:'English',
            selectedLocale: ''
        }
    },
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        },
        currentLanguage() {
             return this.$i18n.locale
        }
    },
    methods: {
        changeLocale() {
          this.$router.push(this.switchLocalePath(this.selectedLocale))
          
        }
        
    }
}
</script>

<style scoped> 
.lang{
  color: #FFF;
  margin: 0 8px;
  /* border-bottom: 2px solid #FFF; */
}
.lang::after{
  content: '';
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
}

[dir=rtl] .lang::after{
  right:  0;
}
@media screen and (max-width:996px) {
  .navbar-collapse{
    /* height: 50vh; */
  }
  .navbar-nav{
    display: block;
    margin: 0 0 20px 0 !important;

  }
  .lang{
   color: #FFF;
   margin: 0;
  /* border-bottom: 2px solid #FFF; */
}
  .lang::after{
    bottom: 7px;

    width: 0%;
  }
}
</style>

