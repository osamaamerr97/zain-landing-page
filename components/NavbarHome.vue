<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <nuxt-link class="navbar-brand" to="">
              <div class="logo" >
                <img src="~/assets/images/logo.png" alt="">
              </div>
            </nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav m-auto">
                <li class="nav-item">
                  <nuxt-link class="nav-link active-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Home") }}</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.About_Us") }}</nuxt-link>

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Services") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Services") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Destinations") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Destinations") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Be_Our_Agent") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Be_Our_Agent") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Faqs") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Faqs") }}</nuxt-link> -->

                </li>
                <li  class="nav-item" v-for="locale in availableLocales" :key="locale.code">
                  <nuxt-link class="nav-link lang" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
                </li>
              </ul>
              <button class="navbar-contact-btn">{{ $t("navbar.Contact_Us") }}</button>


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
  border-bottom: 2px solid #FFF;
}
</style>

