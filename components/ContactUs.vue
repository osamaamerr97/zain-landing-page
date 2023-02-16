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
                                        <div class="contact-des phone_number fs-5">+90 554 710 50 34</div>
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
                                        <div class="contact-des fs-5">info@alzeinglobal.com</div>
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
                                        <div class="contact-des fs-5 location">Port Saeed Business Avenue Tower Office 916 Dubai/UAE</div>
                                        <div class="contact-des fs-5 mt-2 location">Kazlıçeşme, Yedimavi Blok G2 Ofis 6, Zeytinburnu/İstanbul/Turkiye</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="contact-form">
                        <form @submit.prevent="onSubmit">
                            <h2 v-if="success" class="btn btn-success m-2 mb-4 text w-100">{{ fed_back_success }}</h2>

                            <div class="mb-5">
                                <input type="text" class="form-control" v-model="name" id="name" name="name" aria-describedby="name" :placeholder="$t('Contact.Form_Full_Name')">
                                <span v-if="errors.name" class="errors">{{ errors.name }}</span>
                            </div>
                            <div class="mb-5">
                                <input type="email" class="form-control"  v-model="email" id="email" name="email" :placeholder="$t('Contact.Form_E-Mail')">
                                <span v-if="errors.email" class="errors">{{ errors.email }}</span>
                            </div>
                            <div class="mb-5">
                                <input type="number" class="form-control" v-model="phone_number"  id="phone_number" name="phone_number" :placeholder="$t('Contact.Form_Phone_Number')">
                                <span v-if="errors.phone_number" class="errors">{{ errors.phone_number }}</span>
                            </div>
                            <div class="mb-5">
                                <textarea class="form-control" :placeholder="$t('Contact.Form_Write_YourMessage_Here')"  v-model="message" id="message" name="message"></textarea>
                                <span v-if="errors.message" class="errors">{{ errors.message }}</span>
                            </div>
                            <button v-if="!loading" type="submit"  class="">{{ $t("Contact.Form_Send_Now") }}</button>
                            <span class="loading-contact" v-else>
                                {{ $t("Contact.loading") }}
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
<!-- 
        <div class=" BeOurAgent position-absolute top-100 start-50 translate-middle px-5 d-flex align-items-center" >

            <div class="container">
                <div class="row align-items-center ">
                <div class="col-12 col-md-7 text-white">
                    <h2 class="fw-bold text-white h1">{{ $t("Contact.BeOurAgent") }}</h2>
                    <p>{{ $t("Contact.BeOurAgent_des1") }}</p>
                    <p>{{ $t("Contact.BeOurAgent_des2") }}</p>
                    <p>{{ $t("Contact.BeOurAgent_des3") }}</p>
                    <p>{{ $t("Contact.BeOurAgent_des4") }}</p>
                </div>
                <div class="col-12 col-md-5 img-container">
                    <img src="~/assets/images/Layer 1 copy.png"  alt="">
                </div>
            </div>
            </div>

        </div> -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"contact",
    data() {
        return {
            errors: [],
            name: null,
            loading: false,
            email: null,
            message: null,
            phone_number: null,
            success: false,
            fed_back_success: null,
        }
    },
    methods: {
      async  onSubmit() {
            this.errors = {
                'name': null,
                'email': null,
                'message': null,
                'phone_number': null,
            };
            this.loading = true;
            try {
                const data = {
                    name : this.name,
                    email: this.email,
                    message: this.message,
                    phone_number: this.phone_number,
                }
                const headers = {
                    locale : 'ar'
                }
                await axios
                    .post(  'https://staging.zeintur.namaatests.com/api/v1/ztr/settings/contact-us', data, headers)
                    .then(response => {
                        if (response.data.code == 200) {
                            this.success = true;
                            this.fed_back_success = response.data.message
                        }
                        if (response.data.code == 422) {
                            this.success = false;
                            this.errors.name = response.data.errors.invalid_fields.find(e => e.field == 'name')?.message
                            this.errors.email = response.data.errors.invalid_fields.find(e => e.field == 'email')?.message
                            this.errors.message = response.data.errors.invalid_fields.find(e => e.field == 'message')?.message
                            this.errors.phone_number = response.data.errors.invalid_fields.find(e => e.field == 'phone_number')?.message
                        }
                        this.loading = false;
                    })
                    .catch(error => {
                        this.loading = false;
                        //
                    })
            }catch(er) {
                
            }
        }
    }
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
.form-control>#name,
.form-control>#email,
.form-control>#message,
.form-control>#phone_number {
    position: relative;
}

.errors {
    color: #dc3545;
    position: absolute;
    margin-left: 10px;
    margin-top: 1px;
    font-size: 14px;
}

/* .contact{
    margin-bottom: 280px;
} */
/* .BeOurAgent{
    margin-top: 200px;
    width: 95%;
    z-index: 999;
    padding-top: 50px;
    padding-bottom: 50px;    
    border-radius: 50px;
    background-color: #97D3BF ;
    text-align: justify;
}
.BeOurAgent img{
    width: 65%;
    
}
@media screen and (min-width:761px) and (max-width:999px) {
    .BeOurAgent{
        margin-top: 250px;
        
    }
    .contact{
        margin-bottom: 400px;
    }
}
@media screen and (min-width:415px) and (max-width:761px) {
    .BeOurAgent{
        margin-top: 300px;
        
    }
    .contact{
        margin-bottom: 500px;
    }
    
}
@media screen and (min-width:281px) and (max-width:415px) {
    .BeOurAgent{
        margin-top: 350px;
        
    }
    .contact{
        margin-bottom: 600px;
    }
}
@media screen and (max-width:281px) {
    .BeOurAgent{
        margin-top: 450px;
        
    }
    .contact{
    margin-bottom: 800px;


}
}

@media screen  and (max-width:768px) {
    .img-container{
         text-align: center !important;
    }
    .img-container:dir(rtl){
        text-align: center !important;
    }
    
}
.img-container{
    text-align: right;
}
.img-container:dir(rtl){
    text-align: left;
} */
</style>