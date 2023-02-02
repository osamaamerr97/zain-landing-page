<template >
    <div class="faqs">
        <div class="container">
            <div class="row ">
                <div class="col-12 col-lg-6">
                    <img src="../assets/images/magnifying-glass-with-question-mark-focus-wooden-background-concept-search-research-research-searching-investigating-something.png"  class="w-100" alt="">                
                </div>
                <div class="col-12 col-lg-6">
                    <h2 class="faqs-title">Questions And Answers</h2>

                        <ul class="faq-accordion text-md">
                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-1" />
                                <label class="faq-label" for="faq-1">What is Netflix?<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>
                                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br />
                                    </p>
                                </div>
                            </li>

                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-2" />
                                <label class="faq-label" for="faq-2">How much does Netflix cost?<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra.</p>
                                </div>
                            </li>

                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-3" />
                                <label class="faq-label" for="faq-3">Where can I watch?<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>
                                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.
                                        smartphones, tablets, streaming media players and game consoles. <br />
                                    </p>
                                </div>
                            </li>

                            <li>
                                <input class="faq-input" type="radio" name="faq" id="faq-4" />
                                <label class="faq-label" for="faq-4">How do I cancel?<font-awesome-icon icon="fa-solid fa-plus" class="icon"/></label>
                                <div class="faq-content">
                                    <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees.</p>
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