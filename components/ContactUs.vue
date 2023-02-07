<template >
    <div class="contact" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="contact-info">
                        <h2 class="about-title">{{ $t("Contact.Contact_Us") }}</h2>
                        <p class="contact-container-description">{{ $t("Contact.contact_des") }}</p>
                        <p class="contact-container-description">{{ $t("Contact.contact_des2") }}</p>
                        <p class="contact-container-description">{{ $t("Contact.contact_des3") }}</p>
    
                        <div class="contacts-details">
                            <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="contact-icon">
                                            <font-awesome-icon icon="fa-solid fa-phone-volume" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title fs-5">{{ $t("Contact.Phone") }}</div>
                                        <div class="contact-des phone_number fs-4">+90 554 710 50 34</div>
                                    </div>
                             </div>
                            <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="contact-icon">
                                            <font-awesome-icon icon="fa-solid fa-envelope" />   
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title fs-5">{{ $t("Contact.Email") }}</div>
                                        <div class="contact-des fs-4">info@alzeinglobal.com</div>
                                    </div>
                            </div>
                            <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="contact-icon">
                                            <font-awesome-icon icon="fa-solid fa-location-dot" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title fs-5">{{ $t("Contact.Location") }}</div>
                                        <div class="contact-des fs-4 location">Port Saeed Business Avenue Tower Office 916 Dubai/UAE</div>
                                        <div class="contact-des fs-4 mt-2 location">Kazlıçeşme, Yedimavi Blok G2 Ofis 6, Zeytinburnu/İstanbul/Turkiye</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="contact-form">
                        <form>
                            <div class="mb-5">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="$t('Contact.Form_Full_Name')">
                            </div>
                            <div class="mb-5">
                                <input type="email" class="form-control" id="exampleInputPassword1" :placeholder="$t('Contact.Form_E-Mail')">
                            </div>
                            <div class="mb-5">
                                <input type="number" class="form-control" id="exampleInputPassword1" :placeholder="$t('Contact.Form_Phone_Number')">
                            </div>
                            <div class="mb-5">
                                <textarea class="form-control" :placeholder="$t('Contact.Form_Write_YourMessage_Here')" id="floatingTextarea"></textarea>
                            </div>
                            <button type="submit" class="">{{ $t("Contact.Form_Send_Now") }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"contact"
    
}
</script>
<style scoped>
[dir=rtl] .phone_number {
    direction: ltr;
    /* text-align: right; */
}
.location{
    /* text-align: justify; */
    direction: ltr;
}
@media screen and (min-width:821px) {
    [dir=rtl] .phone_number {
        text-align: right;
    }
}
</style>