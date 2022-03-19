<template>
  <div class="container-rota-home">
    <div class="section-description">

      <div class="img">
        <div class="home-description">  Oi, sou a Rosinês </div>
          <div class="home-about"> Analista de desenvolvimento<br> Front-End </div> 
          <div class="home-description-UF">São Paulo, SP</div>
      </div>
    
    </div>
    <div class="section-img">
      <div class="home-photo"></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
};
</script>

<style>
.container-rota-home {
  background: rgb(111, 148, 169);
  background: linear-gradient(
    90deg,
    rgba(111, 148, 169, 1) 24%,
    rgba(0, 255, 209, 1) 100%
  );
  margin: 0px;
  padding: 0px;
  display: flex;
}

.section-description {
  width: 50%;
  padding: 125px;
}

.section-img {
  width: 50%;
}

.home-photo {
  background-color: grey;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 150px;
}
 
/* .img {
  background-image: url("../assets/bg_home.svg");
  background-repeat: no-repeat;
  height: 200px;
} */

.img{ 
  width: 60%;
  height: auto; 
  background:
    linear-gradient(to right, black 4px, transparent 4px) 0 0,
    linear-gradient(to right, black 4px, transparent 4px) 0 100%,
    linear-gradient(to left, black 4px, transparent 4px) 100% 0,
    linear-gradient(to left, black 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, black 4px, transparent 4px) 0 0,
    linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,
    linear-gradient(to top, black 4px, transparent 4px) 0 100%,
    linear-gradient(to top, black 4px, transparent 4px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 15% 22%;
 padding: 43px 23px 23px 41px;
}

.home-description {
  font-size: 26px;
  font-weight: bold;
  color: #ffffff !important;
  /* padding: 30px 0px 0px 60px; */
}

.home-about{
    font-size: 16px;
  font-weight: bold;
  color: #ffffff !important;
   /* padding: 30px 0px 0px 60px; */
}

.home-description-UF {
  font-size: 14px;
  /* padding: 0px 60px; */
  color: #ffffff !important;
}

@media screen and (max-width: 1202px) {
  /* .img {
    background-image: url("../assets/home_media.svg");
  } */
  .home-description {
    font-size: 17px;
  }
  .home-about{
 font-size: 14px;
  }
  .container-rota-home {
    padding-right: 0px;
  }
}

@media screen and (max-width: 850px) {
  /* .img {
    background-image: url("../assets/bg_home_3.svg");
  } */
  .home-description {
    font-size: 14px;
   
  }
  .home-about{
 font-size: 14px;
   
  }
  .container-rota-home {
    /* //#6f94a9  #22c1c3 */
    /* flex-direction: column; */
    background: rgb(111, 148, 169);
    background: linear-gradient(
      0deg, 
      rgba(34, 193, 195, 1) 100%,
        rgba(111, 148, 169, 1) 0%
    );
  }
}

@media screen and (max-width: 692px) {
   .container-rota-home {
   flex-direction: column;
}
.section-img{
  order: 1;
  align-self: center;
   width: 100px;
    height: 100px;
}
.section-description{
  order: 2;
}
.home-photo{
    margin-top: 20%;
  align-self: center;
  width: 100px;
    height: 100px;
}
.section-description{
  padding: 0;
  align-self: center;
}
}

/* @media screen and (max-width:468px) {
  .img {
    display: none;
  }
  .with-out-img{
    display: block;
  }
} */
</style>