<template >
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="contact-info">
                        <h2>Contact Us</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    
                        <div class="contacts-details">
                            <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="icon">
                                            <font-awesome-icon icon="fa-solid fa-phone-volume" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title">Phone</div>
                                        <div class="contact-des">+90 554 710 50 34</div>
                                    </div>
                                </div>
                                <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="icon">
                                            <font-awesome-icon icon="fa-solid fa-envelope" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title">Email</div>
                                        <div class="contact-des">info@alzeinglobal.com</div>
                                    </div>
                                </div>
                                <div class="row contact-ways" >
                                    <div class="col-12 col-md-2">
                                        <div class="icon">
                                            <font-awesome-icon icon="fa-solid fa-location-dot" />    
    
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-10">
                                        <div class="contact-title">Location</div>
                                        <div class="contact-des">Port Saeed Business Avenue Tower Office 916 Dubai/UAE</div>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="contact-form">
                        <form>
                            <div class="mb-5">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name">
                            </div>
                            <div class="mb-5">
                                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="E-Mail">
                            </div>
                            <div class="mb-5">
                                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone Number">
                            </div>
                            <div class="mb-5">
                                <textarea class="form-control" placeholder="Write YourMessage Here" id="floatingTextarea"></textarea>
                            </div>
                            <button type="submit" class="">Send Now</button>
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
.contact{
    padding-top: 8rem;
    padding-bottom: 9.813rem;

}
.contact-info{
    width: 90%;
    
}
h2{
    font-size: 4.375rem;
    letter-spacing: 0px;
    color: #484451;
    padding-top: 4.5rem;
    margin-bottom: 1.25rem;
}
p{
    font-size: 1.625rem;
    color: #484451;
}
.contact-detials{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4.438rem;
}
.contact-ways{
    padding-top: 3.438rem;
}
.icon{
    background-color: #6C429A;
    width: 5rem;
    height: 5rem;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.313rem;
    color: #FFF ;

}
.contact-title{
    font-size: 1.563rem;
    color: #909090;
}
.contact-des{
    font-size: 1.875rem;
    color: #484451;

}
.contact-form{
    background-color:#FAF9FC;
    border-radius: 63px;
    padding-top: 4.5rem;
    padding-bottom: 4rem;
}
.contact-form form{
    width: 80%;
    margin: auto;    
}
input,textarea{
    background-color: transparent;
    border: 1px solid #D9D9D9;
    border-radius: 15px;
    font-size: 1.375rem;
    color: #909090;

}
input{
    height: 5rem;
    
}
textarea{
    height: 14rem;
    
}
button{
    width: 100%;
    height: 5rem;
    border-radius: 15px;
    background-color: #6C429A;
    color: #FFF;
    border: none;
    font-size: 1.375rem;
}
@media screen and (max-width:820px) {
    .contact{
        text-align: center;
        padding-top: 2.5rem;
        padding-bottom: 2rem;
    }   
    h2{
        font-size: 3.375rem;
    }    
    .icon{
        margin: auto;
    }
    .contact-form{
        margin-top: 15px;
    }
}
</style>