<template >
    <div class="faqs" id="faqs">
        <div class="container">
            <div class="row ">
                <div class="col-12 col-lg-5">
                    <img src="../assets/images/magnifying-glass-with-question-mark-focus-wooden-background-concept-search-research-research-searching-investigating-something.png"  class="w-100" alt="">                
                </div>
                <div class="col-12 col-lg-7 section-faq">
                    <h2 class="about-title mb-5">{{ $t("Faqs.QuestionsAndAnswers") }}</h2>

                        <ul class="faq-accordion text-md">
                            <li v-for="index in 5" :key="index">
                                <input class="faq-input" type="radio" name="faq" :id="`faq-${index}`" />
                                <label class="faq-label" :for="`faq-${index}`">{{ $t(`Faqs.Question${index}`) }}<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>
                                        {{ $t(`Faqs.Answer${index}`) }} <br />
                                    </p>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Faqs"    
}
</script>
<style scoped>
@media screen and (min-width:1199px){
    [dir="rtl"] .section-faq{
        padding-right: 60px!important;
        padding-left: 18px!important;
        padding-top: 50px!important;
    }
    [dir="ltr"] .section-faq{
        padding-left: 60px!important;
        padding-right: 18px!important;
        padding-top: 50px!important;
    }
}
</style>