<template>
  <div class="container-rota-home"> 
        <div class="section-description">
       <div class="img">  
         <p class="home-description"> Oi, sou a Rosinês <br> Desenvolvedora Front-End  </p>
          <p class="home-description-UF">  São Paulo, SP </p>
           </div>
      </div>
        <div class="section-img">      
          
      </div> 
  </div>
</template>

<script>
 
export default {
  
  created() {
     
  }
};
</script>

<style>

.container-rota-home{
   background: rgb(111,148,169);
    background: linear-gradient(90deg, rgba(111,148,169,1) 24%, rgba(0,255,209,1) 100%);
     margin: 0px;
  padding: 0px;
  display: flex;
}

.section-description{
  width: 50%;
  padding: 125px;
}

.section-img{
  width: 50%;
}

.img{
  background-image: url("../assets/bg_home.svg");  
  background-repeat: no-repeat;
  height: 200px;
}

.home-description{
  font-size: 26px;
  font-weight: bold;
  color: #FFFFFF !important;
  padding: 30px 0px 0px 60px
}

.home-description-UF{
  font-size: 14px;
   padding: 0px 60px;
    color: #FFFFFF !important;
}
</style>