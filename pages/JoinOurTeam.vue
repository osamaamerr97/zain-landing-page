<template >
<div class="join-team">
    <div class="head">
        <div class="container">
        <div class="join-team-head text-center">
                <h1 class="pb-4">{{ $t('join_our_team.Head') }}</h1>
                <p>{{ $t('join_our_team.Head_des') }}</p>
            </div>
        </div>
    </div>
    <div class="content pb-5">
        <div class="container px-2 px-md-5 pb-3">
            <h1 class="mb-3">{{ $t('join_our_team.Head') }}</h1>
            <p class="mb-0">{{ $t('join_our_team.join_our_team_des') }}</p>
        
            <div class="join-form px-md-5 py-5">
                <form @submit.prevent="onSubmit(this)">
                    <h2 v-if="success" class="btn bg-success bg-opacity-75 m-2 py-3 mb-4 text-white w-100">{{ fed_back_success }}</h2>

                    <div class="row gy-4 gx-3 ">
                        <div class="col-12">
                            <div class="">
                                <input type="text" class="form-control" v-model="join_team.full_name" id="full_name" name="full_name" aria-describedby="full_name" :placeholder="$t('join_our_team.Form_Full_Name')">
                                <span v-if="errors.full_name" class="errors">{{ errors.full_name }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="gender position-relative">
                                <select v-model="join_team.gender" class="w-100" id="gender" name="gender" on-focus="">
                                    <option value="" class='first' disabled hidden >{{ $t('join_our_team.Gender') }}</option>
                                    <option value="Male">{{ $t('join_our_team.Male') }}</option>
                                    <option  value="Femail">{{ $t('join_our_team.Female') }}</option>                         
                                </select> 
                                <div class="arrow-img">
                                    <img src="~/assets/images/right-arrow.png" style="width: 10px;" alt="">
                                </div>                                            
                                <span v-if="errors.gender" class="errors">{{ errors.gender }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="gender position-relative">
                                <select v-model="join_team.marital_status" class="w-100" id="" name="marital_status">
                                    <option value="" disabled hidden  class="text-muted">{{ $t('join_our_team.Merital_Status') }}</option>
                                    <option value="single">{{ $t('join_our_team.single') }}</option>
                                    <option value="marride">{{ $t('join_our_team.marride') }}</option>                         
                                </select> 
                                <div class="arrow-img">
                                    <img src="~/assets/images/right-arrow.png" style="width: 10px;" alt="">
                                </div>                                            
                                <span v-if="errors.marital_status" class="errors">{{ errors.marital_status }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="">
                                <input type="number" class="form-control" v-model="join_team.phone_number" id="phone_number" name="phone_number" aria-describedby="phone_number" :placeholder="$t('Contact.Phone')">
                                <span v-if="errors.phone_number" class="errors">{{ errors.phone_number }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="">
                                <input type="email" class="form-control" v-model="join_team.email" id="email" name="email" aria-describedby="email" :placeholder="$t('Contact.Email')">
                                <span v-if="errors.email" class="errors">{{ errors.email }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="gender position-relative">
                                <input
                                    v-model="join_team.date_of_birth"
                                    :placeholder="$t('join_our_team.DateofBirth')"                   
                                    class="form-control"
                                    type="text"
                                    onfocus="(this.type='date')"
                                    id="date_of_birth" 
                                    name="date_of_birth"/>
                                    
                                <!-- <div class="arrow-img">
                                    <img src="~/assets/images/right-arrow.png" style="width: 10px;" alt="">
                                </div>                                             -->
                                
                                <span v-if="errors.date_of_birth" class="errors">{{ errors.date_of_birth }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="">
                                <input type="text" class="form-control" v-model="join_team.place_of_birth" id="place_of_birth" name="place_of_birth" aria-describedby="place_of_birth" :placeholder="$t('join_our_team.PlaceofBirth')">
                                <span v-if="errors.place_of_birth" class="errors">{{ errors.place_of_birth }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="">
                                <input type="text" class="form-control" v-model="join_team.current_place_of_residence" id="current_place_of_residence" name="current_place_of_residence" aria-describedby="current_place_of_residence" :placeholder="$t('join_our_team.Current_Place')">
                                <span v-if="errors.current_place_of_residence" class="errors">{{ errors.current_place_of_residence }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="">
                                <input type="text" class="form-control" v-model="join_team.practical_qualification" id="practical_qualification" name="practical_qualification" aria-describedby="practical_qualification" :placeholder="$t('join_our_team.PracticalQualification')">
                                <span v-if="errors.practical_qualification" class="errors">{{ errors.practical_qualification }}</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div v-if="!join_team.cv.name" class="position-relative">
                                <input type="file" class="custom-file-input" name="cv" v-on="join_team.cv" @change="uploadImage"  accept="image/*,.pdf"/>
                                <!-- <input type="file" class="form-control"  id="name" name="name" aria-describedby="name" :placeholder="$t('Contact.Form_Full_Name')"> -->
                                <span v-if="errors.cv" class="errors">{{ errors.cv }}</span>
                            </div>

                            <div class="uploaded-file" v-else>
                                <img src="~/assets/images/uploaded.png" class="uploaded-img" alt="">

                                <p class="py-2"> {{$t("join_our_team.File_uploaded") }} <span>{{join_team.cv.name}}</span> </p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form p-0 mt-2">

                        <button v-if="!loading" type="submit"  class="loading-contact">{{ $t("join_our_team.SubmitNow") }}</button>
                        <span class="loading-contact" v-else>
                            {{ $t("Contact.loading") }}
                        </span>
                    </div>
                </form>
            </div>            
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            errors: [],
            loading: false,
            fileName:'',
            join_team:{
                full_name: '',
                gender:'',
                marital_status:'',
                phone_number: '',
                email: '',
                date_of_birth:'',
                place_of_birth:'',
                current_place_of_residence:'',
                practical_qualification:'',
                cv:'',
            },
            message: null,
            success: false,
            fed_back_success: null,
        }
    },
    head() {
        return {
            title: `${this.$t("navbar.Alzein Global")} - ${this.$t("join_our_team.Head")}`,
        }
    },
    methods: {

    uploadImage(e){
      this.join_team.cv = e.target.files[0];
      console.log(this.join_team.cv.name);
    //   if (image.size > 250000) {
    //      alert(`File size is too big => max 250kB`);
    //      return null;
    //   } else {
        // const reader = new FileReader();
        // reader.readAsDataURL(image);
        // reader.addEventListener("load", () => {
        //   if (typeof reader.result === "string") {
        //     this.join_team.cv = reader.result;
        //     console.log(this.join_team.cv);
        //   }
        // });
    //   }
    },
    async  onSubmit(form) {
        this.errors = {
            full_name: null,
            gender:null,
            marital_status:null,
            phone_number: null,
            email: null,
            date_of_birth:null,
            place_of_birth:null,
            current_place_of_residence:null,
            practical_qualification:null,
            cv:null,
        };
        this.loading = true;
        try {
            var formData = new FormData();
            formData.append("locale", this.$i18n.locale);
            formData.append("full_name", this.join_team.full_name);
            formData.append("gender", this.join_team.gender);
            formData.append("marital_status", this.join_team.marital_status);
            formData.append("phone_number", this.join_team.phone_number);
            formData.append("email", this.join_team.email);
            formData.append("date_of_birth", this.join_team.date_of_birth);
            formData.append("place_of_birth", this.join_team.place_of_birth);
            formData.append("current_place_of_residence", this.join_team.current_place_of_residence);
            formData.append("practical_qualification", this.join_team.practical_qualification);
            formData.append("cv", this.join_team.cv);
            await axios
                .post('https://staging.zeintur.namaatests.com/api/v1/ztr/settings/hire', formData)
                .then(response => {
                    console.log(response);
                    if (response.data.code == 200) {
                        this.success = true;
                        this.fed_back_success = response.data.message
                    }
                    if (response.data.code == 422) {
                        let { invalid_fields } = response.data.errors;
                        this.success = false;
                        this.errors.full_name = invalid_fields.find(e => e.field == 'full_name')?.message
                        this.errors.gender = invalid_fields.find(e => e.field == 'gender')?.message
                        this.errors.marital_status = invalid_fields.find(e => e.field == 'marital_status')?.message
                        this.errors.phone_number = invalid_fields.find(e => e.field == 'phone_number')?.message
                        this.errors.email = invalid_fields.find(e => e.field == 'email')?.message
                        this.errors.date_of_birth = invalid_fields.find(e => e.field == 'date_of_birth')?.message
                        this.errors.place_of_birth = invalid_fields.find(e => e.field == 'place_of_birth')?.message
                        this.errors.current_place_of_residence = invalid_fields.find(e => e.field == 'current_place_of_residence')?.message
                        this.errors.practical_qualification = invalid_fields.find(e => e.field == 'practical_qualification')?.message
                        this.errors.cv = invalid_fields.find(e => e.field == 'cv')?.message
                    }
                    this.loading = false;
                })
                .catch(error => {
                    
                    console.log(error);
                    this.loading = false;
                    //
                })
        }catch(er) {
            console.log(er);
        }
    }
    }
}
</script>
<style scoped>
.head{
    background-color: #6C429A;
    padding-bottom: 4.313rem;
    color: #FFF;
    
}  
.errors{
    text-align: left;
    color: #dc3545;
    display: block;
    margin-left: 10px;
    margin-top: 1px;
    font-size: 14px;
}

[dir=rtl] .errors{
    text-align: right!important;
}
.uploaded-file{
    /* background-color: #6C429A; */
    border-radius: 10px;
}
.uploaded-img{
    width: 100px;

}
</style>