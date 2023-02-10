<template >
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="contact-info">
                        <h2 class="contact-container-title">{{ $t("Contact.Contact_Us") }}</h2>
                        <p class="contact-container-description">{{ $t("Contact.contact_des") }}</p>
    
                        <div class="contacts-details">
                            <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="contact-icon">
                                            <font-awesome-icon icon="fa-solid fa-phone-volume" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title">{{ $t("Contact.Phone") }}</div>
                                        <div class="contact-des">+90 554 710 50 34</div>
                                    </div>
                             </div>
                            <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="contact-icon">
                                            <font-awesome-icon icon="fa-solid fa-envelope" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title">{{ $t("Contact.Email") }}</div>
                                        <div class="contact-des">info@alzeinglobal.com</div>
                                    </div>
                            </div>
                            <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="contact-icon">
                                            <font-awesome-icon icon="fa-solid fa-location-dot" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title">{{ $t("Contact.Location") }}</div>
                                        <div class="contact-des">Port Saeed Business Avenue Tower Office 916 Dubai/UAE</div>
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
.form-control > #name,
.form-control > #email,
.form-control > #message,
.form-control > #phone_number {
    position: relative;
}
.errors {
    color: #dc3545;
    position: absolute;
    margin-left: 10px;
    margin-top: 1px;
    font-size: 14px;
}
</style>