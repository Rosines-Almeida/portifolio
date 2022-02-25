<template>
  <div class="container-contato">
    <div class="contato-imagem">
    <img src="../assets/contato.png" alt="lanpada" width="500" height="600">  
    </div>
 
<!-- <div class="contato-links" >
 <div class="box-contatos" v-for="(contato, index) in contatos" v-bind:key="index">
        <div class="contato">
          <i v-bind:class="{{contato.icon}}" > </i>
          <div><a href={{contato.link}} target="_blank">{{contato.midiaSocial}} </a></div>
        </div>
      </div> 
</div> -->
    <div class="contato-links">
      <div class="box-contatos">
        <div class="contato">
          <i class="icon ic_linkedin"> </i>
          <div><a href="https://www.linkedin.com/in/rosines-almeida/" target="_blank">/rosines-almeida </a></div>
        </div>
      </div> 
      <div class="box-contatos">
        <div class="contato">
          <i class="icon ic_email"> </i>
          <div><a href="mailto:rosines.almeida@gmail.com" target="_blank"> rosines.almeida@gmail.com </a></div>
        </div>
      </div>

      <div class="box-contatos">
        <div class="contato">
          <i class="icon ic_gitHub"> </i>
         <div><a href="https://github.com/Rosines-Almeida" target="_blank"> /Rosines-Almeida </a> </div>
        </div>
      </div>
    </div>
    <transition> </transition>
  </div>
</template>

<style scoped>
.container-contato {
  margin: 0px;
  padding: 0px;
  display: flex;
}

.contato-imagem {
  margin: 0px 100px 0 20px;
  background: #6f94a9;
  width: 50%;
  min-height: 100vh;
}

img{
 margin: 100px 150px;
}

.contato-links {
  margin: 170px 0px 0px 40px;
}

.contato {
  display: flex;
}
.contato div {
  font-size: 20px;
  line-height: 60px;
  font-weight: 100;
}

.icon{
  background-repeat: no-repeat;
  height: 27px;
  width: 27px;
  margin: 16px 10px 0px 0px;

}

.ic_linkedin {
  background-image: url("../assets/ic_linkedin.png");
  
}

.ic_email {
   background-image: url("../assets/ic_email.svg");
}

.ic_gitHub {
 background-image: url("../assets/ic_gitHub.svg");
}
</style>

<script>
// import fetchData from "@/mixins/fetchData.js";
import data from "@/mixins/data.js";

export default {
  // name: "contato",
  // mixins: [fetchData],
  created() {
    // this.fetchData("/contato");
    this.contatos = data.contatos;
  
  },
};
</script>
