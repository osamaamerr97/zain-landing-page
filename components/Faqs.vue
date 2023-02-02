<template >
    <div class="faqs">
        <div class="container">
            <div class="row ">
                <div class="col-12 col-lg-6">
                    <img src="../assets/images/magnifying-glass-with-question-mark-focus-wooden-background-concept-search-research-research-searching-investigating-something.png"  class="w-100" alt="">                
                </div>
                <div class="col-12 col-lg-6">
                    <h2>Questions And Answers</h2>

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
.faqs{
    background-color:#FAF9FC;
    padding-top: 4.625rem;
    padding-bottom: 6.188rem;

}
h2{
    text-align: left;
    font-size: 4.375rem;
    letter-spacing: 0px;
    color: #484451;
}
/*********** */

:root {
  --color-input: #333333;
}

/* Box Sizing ----------------------------------------- */

/* *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */

/* Text, Tag Style ------------------------------------ */

h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.3;
}
a,
li {
  text-decoration: none;
  list-style: none;
}
p,
span {
  font-weight: 300;
  font-size: clamp(0.8rem, 4vw, 1.4rem);
}
/* body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: black;
  color: white;
  padding: 3%;
  min-height: 100vh;
  display: grid;
} */

/* Spacing -------------------------------------------- */

/* .margin-bottom {
  margin-bottom: 1rem;
} */

/* Text Style ----------------------------------------- */

.text-lg {
  font-size: clamp(1.2rem, 8.8vw, 2.8rem);
  font-weight: 600;
}
.text-md {
  font-size: clamp(0.8rem, 5vw, 1.6rem);
  font-weight: 400;
  line-height: 1.3;
}
.text-center {
  text-align: center;
}
ul{
    margin: 0;
    padding: 0;
}
/* Support HTML CSS ----------------------------------- */

/* .title {
  font-size: 1.4rem;
  color: gray;
  margin-top: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid gray;
} */

/* .container {
  display: grid;
  margin: auto;
  place-content: center;
  padding: 2rem;
  gap: 1rem;
  border-radius: 0.4rem;
} */

/* F.A.Q ---------------------------------------------- */

.faq-accordion {
  display: grid;
  gap: 0.4rem;
  max-width: 50rem;
}
.faq-accordion li{
    background-color: #FFF;
    padding: 17px;
    border-radius: 15px;
}
.faq-input {
  display: none;
}
.faq-label {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
  padding-inline: 3%;
  background-color: var(--color-input);
  /* border-bottom: 2px solid black; */
}
.faq-content {
  background-color: var(--color-input);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in, padding 0.3s ease-in;
}
.faq-content p {
  margin: 2rem;
}
.faq-input:checked ~ .faq-content {
  max-height: 60rem;
  transition: max-height 0.3s ease-in;
}
.faq-input:checked ~ .faq-label .icon {
  transform: rotate(45deg);
  transition: max-height 0.3s ease-in, padding 0.3s ease-in;
}

/* Media Query --------------------------------------- */
/* 
@media (320px <= width <= 940px) {
  .faq-content p {
    margin: 1rem;
  }
}

@media (320px <= width <= 480px) {
  .container {
    padding: 1rem;
  }
}

@media (min-width: 2048px) {
  .container {
    zoom:2;
  }
} */
@media screen and (max-width:820px) {

    h2{
        padding-top: 25px;
    }
}
</style>