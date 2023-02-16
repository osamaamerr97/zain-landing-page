<template >
<div class="join-team">
    <div class="head">
        <div class="container">
        <div class="join-team-head text-center">
                <h1>{{ $t('join_our_team.Head') }}</h1>
                <p>{{ $t('join_our_team.Head_des') }}</p>
            </div>
        </div>
    </div>
    <div class="content pb-5">
        <div class="container px-2 px-md-5 pb-3">
            <h1 class="mb-3">{{ $t('join_our_team.Head') }}</h1>
            <p class="mb-0">{{ $t('join_our_team.join_our_team_des') }}</p>
        
            <div class="join-form px-5 py-5">
                <form @submit.prevent="onSubmit">
                            <!-- <h2 v-if="success" class="btn btn-success m-2 mb-4 text w-100">{{ fed_back_success }}</h2> -->

                            <div class="row gy-4 gx-3 ">
                                <div class="col-12">
                                    <div class="">
                                        <input type="text" class="form-control" v-model="Full_name" id="Full_name" name="Full_name" aria-describedby="Full_name" :placeholder="$t('join_our_team.Form_Full_Name')">
                                        <span v-if="errors.Full_name" class="errors">{{ errors.Full_name }}</span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="gender position-relative">
                                        <select v-model="gender" class="w-100" id="" name="gender">
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
                                        <select v-model="meritalStatus" class="w-100" id="" name="merital_status">
                                            <option value="" disabled hidden  class="text-muted">{{ $t('join_our_team.Merital_Status') }}</option>
                                            <option value="single">{{ $t('join_our_team.single') }}</option>
                                            <option value="marride">{{ $t('join_our_team.marride') }}</option>                         
                                        </select> 
                                        <div class="arrow-img">
                                            <img src="~/assets/images/right-arrow.png" style="width: 10px;" alt="">
                                        </div>                                            
                                        <span v-if="errors.meritalStatus" class="errors">{{ errors.meritalStatus }}</span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="">
                                        <input type="number" class="form-control" v-model="Phone" id="Phone" name="Phone" aria-describedby="Phone" :placeholder="$t('Contact.Phone')">
                                        <span v-if="errors.Phone" class="errors">{{ errors.Phone }}</span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="">
                                        <input type="email" class="form-control" v-model="email" id="email" name="email" aria-describedby="email" :placeholder="$t('Contact.Email')">
                                        <span v-if="errors.email" class="errors">{{ errors.email }}</span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="gender position-relative">
                                        <!-- <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth" aria-describedby="dateOfBirth" :placeholder="$t('Contact.phone')"> -->
                                        <input
                                             :placeholder="$t('join_our_team.DateofBirth')"                   
                                             class="form-control"
                                            type="text"
                                            onfocus="(this.type='date')"
                                            id="date" 
                                            name="date_of_birth"/>
                                        <!-- <div class="arrow-img">
                                            <img src="~/assets/images/right-arrow.png" style="width: 10px;" alt="">
                                        </div>                                             -->
                                        
                                        <span v-if="errors.dateOfBirth" class="errors">{{ errors.dateOfBirth }}</span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="">
                                        <input type="text" class="form-control" v-model="placeOfBirth" id="PlaceofBirth" name="Place_of_Birth" aria-describedby="PlaceofBirth" :placeholder="$t('join_our_team.PlaceofBirth')">
                                        <span v-if="errors.placeOfBirth" class="errors">{{ errors.placeOfBirth }}</span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="">
                                        <input type="text" class="form-control" v-model="email" id="Current_Place" name="Current_Place" aria-describedby="Current_Place" :placeholder="$t('join_our_team.Current_Place')">
                                        <span v-if="errors.currentPalce" class="errors">{{ errors.currentPalce }}</span>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="">
                                        <input type="text" class="form-control" v-model="PracticalQa" id="PracticalQualification" name="Practical_Qualification" aria-describedby="PracticalQualification" :placeholder="$t('join_our_team.PracticalQualification')">
                                        <span v-if="errors.PracticalQa" class="errors">{{ errors.PracticalQa }}</span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="position-relative">
                                        <input type="file" class="custom-file-input" name="cv"/>
                                        <!-- <input type="file" class="form-control"  id="name" name="name" aria-describedby="name" :placeholder="$t('Contact.Form_Full_Name')"> -->
                                        <span v-if="errors.cv" class="errors">{{ errors.cv }}</span>
                                    </div>
                                </div>
                            </div>

                            
                            <button v-if="!loading" type="submit"  class="btn py-3 mt-4">{{ $t("join_our_team.SubmitNow") }}</button>
                            <span class="loading-contact" v-else>
                                {{ $t("Contact.loading") }}
                            </span>
                        </form>
            </div>
        
        
        
        
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            errors: [],
            loading: false,
            Full_name: '',
            gender:'',
            meritalStatus:'',
            phone_number: '',
            email: '',
            dateOfBirth:'',
            placeOfBirth:'',
            currentPalce:'',
            PracticalQa:'',
            cv:'',

            message: null,
            success: false,
            fed_back_success: null,
        }
    },
    methods: {
      async  onSubmit() {
            this.errors = {
                'Full_name': null,
                'gender':null,
                'meritalStatus':null,
                'phone_number': null,
                'email': null,
                'dateOfBirth':null,
                'placeOfBirth':null,
                'currentPalce':null,
                'PracticalQa':null,
                'cv':null,
            };
            this.loading = true;
            // try {
            //     const data = {
            //         name : this.name,
            //         email: this.email,
            //         message: this.message,
            //         phone_number: this.phone_number,
            //     }
            //     const headers = {
            //         locale : 'ar'
            //     }
            //     await axios
            //         .post(  'https://staging.zeintur.namaatests.com/api/v1/ztr/settings/contact-us', data, headers)
            //         .then(response => {
            //             if (response.data.code == 200) {
            //                 this.success = true;
            //                 this.fed_back_success = response.data.message
            //             }
            //             if (response.data.code == 422) {
            //                 this.success = false;
            //                 this.errors.name = response.data.errors.invalid_fields.find(e => e.field == 'name')?.message
            //                 this.errors.email = response.data.errors.invalid_fields.find(e => e.field == 'email')?.message
            //                 this.errors.message = response.data.errors.invalid_fields.find(e => e.field == 'message')?.message
            //                 this.errors.phone_number = response.data.errors.invalid_fields.find(e => e.field == 'phone_number')?.message
            //             }
            //             this.loading = false;
            //         })
            //         .catch(error => {
            //             this.loading = false;
            //             //
            //         })
            // }catch(er) {
            // }
        }
    }
}
</script>
<style scoped>
.head{
    /* background-image: url('@/assets/images/background.png');
    background-position: center center;
    background-size: 100% 100%; */
    background-color: #6C429A;
    padding-bottom: 4.313rem;
    color: #FFF;
    
}  

</style>