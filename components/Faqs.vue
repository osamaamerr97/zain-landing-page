<template >
    <div class="faqs">
        <div class="container">
            <div class="row ">
                <div class="col-12 col-lg-6">
                    <img src="../assets/images/magnifying-glass-with-question-mark-focus-wooden-background-concept-search-research-research-searching-investigating-something.png"  class="w-100" alt="">                
                </div>
                <div class="col-12 col-lg-6">
                    <h2 class="faqs-title">{{ $t("Faqs.QuestionsAndAnswers") }}</h2>

                        <ul class="faq-accordion text-md">
                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-1" />
                                <label class="faq-label" for="faq-1">{{ $t("Faqs.Question1") }}<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>
                                        {{ $t("Faqs.Answer1") }} <br />
                                    </p>
                                </div>
                            </li>

                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-2" />
                                <label class="faq-label" for="faq-2">{{ $t("Faqs.Question2") }}<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>{{ $t("Faqs.Answer2") }}</p>
                                </div>
                            </li>

                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-3" />
                                <label class="faq-label" for="faq-3">{{ $t("Faqs.Question3") }}<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>
                                        {{ $t("Faqs.Answer3") }}<br />
                                    </p>
                                </div>
                            </li>

                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-4" />
                                <label class="faq-label" for="faq-4">{{ $t("Faqs.Question3") }}<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>{{ $t("Faqs.Answer3") }}</p>
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

</style>