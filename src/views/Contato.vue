<template>
  <div class="container-contato">
    <div class="contato-imagem">
      <img src="../assets/contato.png" alt="lanpada"/>
    </div>

    <div class="contato-links">
      <div
        class="box-contatos"
        v-for="(contato, index) in contatos"
        v-bind:key="index"
      >
        <div class="contato">
          <i :class="contato.icon"> </i>
          <div class="contato-link">
            <a :href="contato.link" target="_blank"
              >{{ contato.midiaSocial }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-contato {
  margin: 0px;
  padding: 0 20px;
  display: flex;
}

.contato-imagem {
 
  background: #6f94a9;
  width: 50%;
  /* min-height: 100vh; */
}

img {
  margin: 10px 50px ;
  /* width: 84%; */
}

.contato-links {
 margin: 120px 90px;
}

.contato {
  display: flex;
}

 
.contato div {
  font-size: 1em;
  line-height: 60px;
  font-weight: 100;
}

.icon {
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

@media screen and (max-width: 1022px) {
  img{
width: 80%;
  }
  }

@media screen and (max-width: 745px) {
  .contato-imagem{
    display: none;
  }
 .contato-links{
    background-image:   url("../assets/contato.png");
    mix-blend-mode: color-burn;
    width: 100%;
    min-height: 390px;
    background-repeat: no-repeat;
    margin: 35px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center;
 }
 a{
  color: black;
    font-weight: 550;
 }
  }
</style>

<script>
import data from "@/mixins/data.js";

export default {
 
  created() { 
    this.contatos = data.contatos;
  },
};

</script>