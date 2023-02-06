<template >
    <div class="about" id="about">
        <div class="container">
            <div class="row about-first-row">
                <div class="col-12 col-lg-6">
                    <img src="../assets/images/chad-peltola-Rch8oP-O5sU-unsplash.png" class="about-first-image" alt="">
                </div>
                <div class="col-12 col-lg-6 d-flex align-items-center">
                    <div class="about-content">
                        <h4 class="about-span">{{ $t("About.ABOUT_US") }}</h4>
                        <h2 class="about-title">{{ $t("About.Zeni_Global") }}</h2>
                        <p class="about-description">{{ $t("About.About_p1") }}</p>
                        <!-- <p class=" about-description about-second-description">{{ $t("About.About_p2") }} </p> -->
                        <template v-if="show_para">
                            <p class="about-description about-second-description">{{ $t("About.sec_para") }}</p>
                            <p class="about-description about-second-description">{{ $t("About.third_para") }}</p>
                        </template>
                        <button class="about-btn" v-else @click="showMore()">{{ $t("About.Read_More") }}</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div>
                        <h4 class="about-span">{{ $t("About.ZENI_GLOBAL_Team") }}</h4>
                        <h2 class="about-title">{{ $t("About.Vision&Team") }}</h2>
                        <div class="about-collaps">
                            <details class="accordion">
                                <summary class="accordion__title">
                                    <font-awesome-icon icon="fa-solid fa-eye" class="about-icon" />
                                    {{ $t("About.our_vision") }}
                                </summary>
                                <div class="accordion__content">
                                    <p>{{ $t("About.our_vision_des") }}</p>
                                </div>
                            </details>
                            <details class="accordion">
                                <summary class="accordion__title">
                                    <font-awesome-icon icon="fa-solid fa-people-group" class="about-icon"/>
                                    {{ $t("About.our_team") }}
                                </summary>
                                <div class="accordion__content">
                                <p>{{ $t("About.our_team_des") }}</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 about-second-imag">
                    <img src="../assets/images/business-people-partnership-support-team-urban-scene-concept.png" class="w-75" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AboutUs",
    data: function () {
        return {
            show_para: false
        }
    },
    methods: {
        showMore() {
            return this.show_para = true;
        }
    }
}
</script>
<style scoped lang="scss">
.accordion {
  border: solid 2px #f5f5f5;
  transition: all 0.3s ease-in-out;
  // max-height: 4em;
  // overflow: hidden;  
  border-radius: 20px;

  & + & {
    margin-top: 0.25rem;
  }  
  &:hover {
    background-color: #f5f5f5;
  }

  .accordion__title {
    list-style-type: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 400;
    font-weight: normal;
    color: #6C429A;
    padding: 0.875rem 2.5rem 0.875rem 0.875rem;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M23.024 11.263l-7.024 7.023-7.022-7.023-3.091 3.090 8.569 8.569c0.413 0.413 0.961 0.64 1.545 0.64s1.133-0.228 1.545-0.64l8.569-8.569-3.091-3.090z' fill='%23555555'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position-y: center!important;
    background-size: 1.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    background-position-x: 94%;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }
  }


  .accordion__content {
    padding: 0 1rem 1rem 6rem;
    p {
        margin: 0;   
         font-size: 1rem;
        color: #484451;
       letter-spacing: 0px;
    }
    p + p {
      margin-top: 0.5em;
    }
  }

  &[open] {
    background-color: #fff;
    border-color: #ebebeb;
    // max-height: 50em;
    
    .accordion__title {
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.976 22.025l7.024-7.023 7.022 7.023 3.091-3.090-8.568-8.568c-0.413-0.412-0.961-0.64-1.545-0.64s-1.133 0.228-1.545 0.64l-8.569 8.569 3.091 3.090z' fill='%23555555'/%3e%3c/svg%3e");
    }
  }
}
.accordion:dir(rtl){
.accordion__content {
    padding: 0 6rem 1rem 1rem ;
  }
    .accordion__title{
        background-position: left 0.75rem top 3rem;
        padding: 0.875rem 0.875rem 0.875rem  2.5rem;

    
      }

}
</style>