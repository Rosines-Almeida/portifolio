<template>
  <div class="container-contato">
    <div class="contato-imagem">
    <img src="../assets/contato.png" alt="lanpada" width="500" height="600">  
    </div>

    <div class="contato-links">
      <div class="box-contatos">
        <div class="contato">
          <i class="icon ic_linkedin"> </i>
          <div>/rosines-almeida</div>
        </div>
      </div>

      <div class="box-contatos">
        <div class="contato">
          <i class="icon ic_email"> </i>
          <div>rosines.almeida@gmail.com</div>
        </div>
      </div>

      <div class="box-contatos">
        <div class="contato">
          <i class="icon ic_gitHub"> </i>
          <div>/rosines-almeida</div>
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
  margin: auto 55px;;
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
   background-image: url("../assets/ic_linkedin.png");
}

.ic_gitHub {
 background-image: url("../assets/ic_linkedin.png");
}
</style>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>
