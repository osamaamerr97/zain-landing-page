<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container p-0">
            <nuxt-link class="navbar-brand pb-0" to="/">
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
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('index')">{{ $t("navbar.Home") }}</nuxt-link> -->
                  <nuxt-link class="nav-link active-link" aria-current="page" to="/">{{ $t("navbar.Home") }}</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" to="/">{{ $t("navbar.About_Us") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.About_Us") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" to="/">{{ $t("navbar.Services") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Services") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" to="/">{{ $t("navbar.Destinations") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Destinations") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" to="/">{{ $t("navbar.Be_Our_Agent") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Be_Our_Agent") }}</nuxt-link> -->

                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" aria-current="page" to="/">{{ $t("navbar.Faqs") }}</nuxt-link>
                  <!-- <nuxt-link class="nav-link" aria-current="page" :to="localePath('/')">{{ $t("navbar.Faqs") }}</nuxt-link> -->

                </li>

              </ul>


              <button class="">{{ $t("navbar.Contact_Us") }}</button>
            </div>
          </div>
        </nav>
    </div>
</template>
<script>
export default {
  name:"NavbarHome"
}
</script>

<style scoped> 
.navbar{
  font-size: 1.25rem;
  font-weight: normal;
  opacity: 1;
  background-color: #6C429A;
}
button{
  width: 11.563rem;
  height: 4rem;
  background-color: transparent;
  border: 0.125rem solid #FFFFFF;
  border-radius: 0.938rem;
  opacity: 1;
  color: #FFFFFF;
}
</style>

