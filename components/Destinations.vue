<template >
    <div class="container text-center">
        <div class="destinations">
            <h2>Destinations</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni delectus dolorum porro qui quam, magnam veniam.</p>
        
            <div class="row">
                <div class="col-12 col-md-4">
                  <img src="../assets/images/Group 32.png" class='w-100' alt="">  
                </div>
                <div class="col-12 col-md-4">
                    <img src="../assets/images/Group 33.png" class='w-100' alt="">  

                </div>
                <div class="col-12 col-md-4">
                    <img src="../assets/images/Group 34.png" class='w-100' alt="">  

                </div>
            </div>
        
        </div>
    </div>
</template>
<script>
export default {
    name:"Destinations"
}
</script>
<style scoped >
.destinations{
    padding-top: 7.125rem;
    padding-bottom: 10.375rem;
}    
h2{
    /* font-size: 4.375rem; */
    font-size: 3.375rem;
    color: #484451;
}
p{
    font-size: 1.625rem;
    margin: auto;
    margin-bottom: 3rem;
    width: 50%;
}
@media screen and (max-width:820px) {
    p{
        width: 100%;
    }
    img{
        margin-top: 10px;
    }
    .destinations{
    padding-bottom: 5.375rem;
    padding-top: 3.125rem;

}  
}
</style>