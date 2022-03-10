<template>
  <div class="container-projeto">
    <div class="projeto-background">
      <div class="projeto-description">
        <div class="title">Projetos</div>
        <div class="description">Conheça alguns projetos</div>
        <p>
          Projetos desenvolvidos em cursos e treinamentos. 
          <br />Veja mais no gitHub
          <span>
            <a href="https://github.com/Rosines-Almeida" target="_blank"
              ><i class="contato icon ic_gitHub"> </i>
            </a>
          </span>
        </p>
      </div>
    </div>
    <div>
      <div
        v-for="(projeto, index) in projetos"
        :key="index"
        class="box-projetos"
      >
        <div class="box-shadow-projetos">
          <div class="projeto-gift">
            <img   :src="`/img/${projeto.src}`" />
          </div>
          <div class="projeto-description-box">
            <div class="projeto-link">
              <a :href="projeto.link" target="_blank">
                {{ formatLink(projeto.link) }}</a
              >
            </div>
            <div class="projeto-liguagens">
              <div
                v-for="(tec, index) in projeto.techs"
                :key="index"
                class="liguagen"
              >
                {{ tec }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        class="box-projetos"
      >
        <div class="box-shadow-projetos">
          <div class="projeto-gift">
            <img src="../assets/projeto_tecno.gif"/>
          </div>
          <div class="projeto-description-box">
            <div class="projeto-link"> dsd</div>
            <div class="projeto-liguagens">
              <div 
                class="liguagen"
              >
               react
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>
<style scoped>


.container-projeto {
  margin: 0px;
  padding: 0px;
  display: flex;
}
.projeto-description {
  color: white;
  text-align: center;
  /* min-height: 100vh; */
 margin-top: 15%;
}

.projeto-description p {
  color: white;
}

.description {
  font-size: 1.375em;
  margin-top: 25px;
}

.projeto-description p {
  font-size: 1.125em;
  margin-top: 45px;
}

.projeto-background {
  margin: 0px 100px 0 20px;
  background: #6f94a9;
  width: 35%;
}

.title {
  color: white;
  
  font-size: 2.25em;
  font-weight: bold;
  padding: 16px 55px;
}

.box-projetos {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
  flex-direction: column;
  margin-bottom: 25px;
}

.projeto-gift {
  border-radius: 6px 6px 0px 0px;
  background-color: white;
  border-bottom: 0.6px dashed #e0e0e0;
     width: 100%;
  height: 217px;
}

.projeto-gift img{
  border-radius: 6px 6px 0 0;
}

.box-shadow-projetos {
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  height: 289px;
  border-radius: 0px 0px 6px 6px;
  width: 100%;
}

.projeto-description-box {
  display: flex;
  flex-wrap: wrap;
  height: 70px;
  background-color: white;
  border-radius: 0px 0px 6px 6px;
  width: 100%;
  flex-direction: column;
}

.projeto-link {
  margin: auto auto;
  font-size: 1em;
  color: #131212;
  display: inline-block;
}

.projeto-liguagens {
  display: flex;
  gap: 5px;
  margin: auto auto;
  width: 100%;
   justify-content: center;
}

.liguagen {
  background-color: #58c3ff;
    width: 15%;
    font-size: 0.625em;
    text-align: center;
    border-radius: 7px;
    color: white;
    align-self: center; 
    padding: 3px;
}

.icon {
  background-repeat: no-repeat;
  height: 27px;
  width: 27px;
  margin: 16px 10px 0px 0px;
}

.ic_gitHub {
  background-image: url("../assets/ic_gitHub.svg");
}
span {
  font-size: 1.25em;
  line-height: 60px;
  font-weight: 100;
}

img {
  height: 217px;
  width: 600px;
}

.contato {
  display: inline-block;
  margin-left: 10px;
}

@media screen and (max-width: 1022px) {
 .container-projeto {
    flex-direction: column;
  }
  .projeto-background{
    width: 100%;
    margin: 0;
  }
  .box-projetos {
  display: block; 
  margin: 30px;
}
img{
  width: 100%;
}
.title {
  font-size: 1.5em;
  font-weight: bold;
  padding: 16px 55px;
}
.description {
  font-size: 0.875em;
  margin-top: 5px;
}
p{
  font-size: 0.875em !important;
}
.projeto-description{
  margin-top: 5%;
}
.projeto-description p{
margin:0
}

}
</style>

<script>
import data from "@/mixins/data.js";

export default {
  created() {
    this.projetos = data.projetos;
  },

  methods: {
    formatLink: function(link) {
      return link.replace("https://", "");
    },
    getImage: function(img) {
      return `/img/${img}`;
    },
  },
};
</script>
