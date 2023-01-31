<template >
    <div class="container about">
        <div class="row first-row">
            <div class="col-12 col-md-6">
                <img src="../assets/images/chad-peltola-Rch8oP-O5sU-unsplash.png" class="w-75" alt="">
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center">
                <div class="about-content">
                    <h4>ABOUT US</h4>
                    <h2>Zeni Global</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p class="second-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in </p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div>
                    <h4>ZENI GLOBALS</h4>
                    <h2>Vision & Team</h2>

                    <div class="collaps">                        
                            <div class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-eye" />
                                </span>
                                Our Vision
                            </div>
                            <div >
                                <div class="collapse collapse-horizontal" id="collapseWidthExample">
                                    <div class="" >
                                         This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                                    </div>
                                </div>
                            </div>
                        
                    </div>



                </div>
            </div>
            <div class="col-12 col-md-6 text-end">
                <img src="../assets/images/business-people-partnership-support-team-urban-scene-concept.png" class="w-75" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"AboutUs"
    
}
</script>
<style scoped>
.about{
    padding-top: 3.563rem;
    padding-bottom: 11.125rem;
}  
.first-row{
    padding-bottom: 11.688rem;
    
}
 
h4{
    font-size: 2.813rem;
    font-weight: normal;
    letter-spacing: 0px;
    color: #97D3BF;
    text-transform: uppercase;
}
h2{
    font-size: 4.063rem;
    letter-spacing: 0px;
    color: #484451;
}
p{
    font-size: 1.625rem;
    color: #484451;
    letter-spacing: 0px;
}
.second-p{
    margin-bottom: 2.5rem;
}
button{
    width: 13.75rem;
    height: 5.313rem;
    background-color: #6C429A;
    border-radius: 15px; 
    border: none;
    color: #FFF;
    font-size: 1.188rem;
}
.row > * {
    padding: 0;
}

/********************** */
.collaps{
    border: 2px solid #E1E1E1;
    border-radius: 20px;
    /* width: 41.875rem; */
    height: 19.688rem;
    padding: 1rem;
    
}
.icon{
    display: inline-block;
    /* width: 5rem; */
    height: 5rem;
    background-color: #6C429A;
}
</style>