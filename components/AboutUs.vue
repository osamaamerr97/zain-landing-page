<template >
    <div class="container about">
        <div class="row first-row">
            <div class="col-12 col-lg-6">
                <img src="../assets/images/chad-peltola-Rch8oP-O5sU-unsplash.png" class="w-75" alt="">
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center">
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
            <div class="col-12 col-lg-6">
                <div>
                    <h4>ZENI GLOBALS</h4>
                    <h2>Vision & Team</h2>
                    <div class="collaps">
                        <details class="accordion">
                            <summary class="accordion__title">
                                <font-awesome-icon icon="fa-solid fa-eye" class="icon" />
                                 Our Vission
                            </summary>
                            <div class="accordion__content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
                            </div>
                        </details>
                        <details class="accordion">
                            <summary class="accordion__title">
                                <font-awesome-icon icon="fa-solid fa-people-group" class="icon"/>
                                     Our team
                            </summary>
                            <div class="accordion__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 second-imag">
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
<style scoped lang="scss">
.about{
    padding-top: 3.563rem;
    padding-bottom: 11.125rem;
} 

.second-imag{
    text-align: right;
    height: 100%;
} 

.first-row{
    padding-bottom: 11.688rem;
    
}
@media screen and (max-width:820px) {
    .about{
        text-align: center;
        padding-bottom: 5.125rem;
        
    }
    .second-imag{
        text-align: center;
        margin-top: 15PX;
    }
    .first-row{
        padding-bottom: 5.688rem;
    
    }
    .serices-des{
        width: 100%;
    }
    .about-content{
        padding-top: 1rem;
    }
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
.collaps{
    margin-top: 2.188rem;
}
/********************** */
.accordion {
  border: solid 2px #f5f5f5;
  transition: all 0.3s ease-in-out;
  // max-height: 4em;
  // overflow: hidden;  
  border-radius: 20px;


  & + & {
    margin-top: 0.25rem;
  }  
  &:hover {
    background-color: #f5f5f5;
  }

  .accordion__title {
    list-style-type: none;
    cursor: pointer;
    font-size: 1.75rem;
    font-weight: normal;
    color: #6C429A;
    padding: 0.875rem 2.5rem 0.875rem 0.875rem;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M23.024 11.263l-7.024 7.023-7.022-7.023-3.091 3.090 8.569 8.569c0.413 0.413 0.961 0.64 1.545 0.64s1.133-0.228 1.545-0.64l8.569-8.569-3.091-3.090z' fill='%23555555'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem top 3rem;
    background-size: 1.5rem;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    height:7.5rem;
    width:100%;
    display: flex;
    align-items: center;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }
  }
.icon{
    background-color: #6C429A;
    color: #FFF;
    padding: 20px;
    font-size: 45px;
    border-radius: 15px;
    margin-right: 10px;
    
}  

  .accordion__content {
    padding: 0 1rem 1rem 7rem;
    p {
      margin: 0;      
    }
    p + p {
      margin-top: 0.5em;
    }
  }

  &[open] {
    background-color: #FAF9FC;
    border-color: #ebebeb;
    // max-height: 50em;
    
    .accordion__title {
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.976 22.025l7.024-7.023 7.022 7.023 3.091-3.090-8.568-8.568c-0.413-0.412-0.961-0.64-1.545-0.64s-1.133 0.228-1.545 0.64l-8.569 8.569 3.091 3.090z' fill='%23555555'/%3e%3c/svg%3e");
    }
  }
}

</style>