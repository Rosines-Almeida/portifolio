<template>
  <div class="container-rota-curso bg-dots">
    <div class="section-experience">  
      <p class="experience-title">Experiência</p>
      <div
        class="d-flex gap-10 mt-3"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <div class="separator">{{ experience.year }}</div>  
        <div class="experience-box">
          <div class="experience-box-description">  
            {{ experience.description }}
          </div>
          <div class="experience-box-skills">
            <div>{{ experience.title }}</div>
            <div class="skills">
              <p
                v-for="(skill, index) in experience.skills"  
                :key="index"
                class="skill"  
              >
                {{ skill }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-education">  
      <div class="container-education">  
        <div class="separator-flex">
          <div class="description-separator">Formação</div>
          <div class="after"></div>
        </div>
        <div class="d-flex gap-10" v-for="(item, index) in formacao" :key="index">
          <div class="container-education-box">
            <p>{{ item.tipo }}</p>
            <p>{{ item.formacao }}</p>
            <p>{{ item.instituicao }}</p>
          </div>
        </div>
      </div>

      <div class="container-education">
        <div class="separator-flex">
          <div class="description-separator">Certificação</div>
          <div class="after"></div>
        </div>
        <div
          class="d-flex gap-10"  
          v-for="(item, index) in certificacao"  
          :key="index"
        >
          <div class="container-education-box">
            <p></p> 
              <a class="certification-link" :href="item.link" target="_blank" > 
                 <p class="certification-link" v-html="item.formacao"></p>
                 </a> 
            <p>{{ item.instituicao }}</p>
          </div>
        </div>
      </div>

      <div class="container-formacao">
        <div class="separator-flex">
          <div class="description-separator">
            Alguns <br />
            Cursos
          </div>
          <div class="after"></div>
        </div>
        <div class="alguns-cursos">
          <div class="box-alguns-cursos">
            <div v-for="(curso, index) in cursos" :key="index">
              <div class="box-certificacoes">
                <div :class="curso.formacao" class="curso">
                  <a :href="curso.link" target="_blank">{{ curso.formacao }}</a>
                </div>
                <div class="instituicao" v-html="curso.instituicao"></div>
                <div class="horas" v-html="curso.horas"></div>
              </div>
              <hr v-if="cursos.length - 1 != index" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>

<style>
.mt-3 {
  margin-top: 30px;
}

.container-rota-curso {
  margin: 0px;
  padding: 0 20px;
  display: flex;
}

.section-experience {
 padding-right: 40px;
}
.d-flex{
display: flex;
}  

.gap-10{
  gap: 10;
}

.separator {
  align-self: center;
  color: #131212;
  width: 91px;
  font-size: 1.125em;
  font-weight: bold;
}

.separator::after {
  content: " ";
  height: 200px;
  border-right: 4px solid #299492;
  margin: 8px;
  align-self: center;
}

.separator-flex {
  display: flex;
  width: 115px;
}

.experience-box {
  display: flex;
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  padding: 20px;
  flex-wrap: wrap;
}

.experience-box-description {
  color: #867c7c;
  flex: 1;
  align-self: center;
  font-size: 0.75em;
}

.experience-box-skills {
  color: #131212;
  flex: 1;
  margin-left: 30px;
    font-size: 0.75em;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.skill {
  background-color: #f5f5f5;
  margin: 10px;
  border-radius: 1em;
  color: #131212 !important;
  width: auto;
  text-align: center;
  font-size: 0.82em;
  padding:6px 15px;
}

.experience-title {
  font-size: 2.12em;
  color: #bab3b3;
  font-weight: bold;
    padding: 0px 59px;
    margin-top: 30px;
}

.section-education  {
  padding: 0 20px;
  background: #6f94a9;
  /* width: 50%; */
}

.container-education-box {
  text-align: center;
  padding: 20px 20px;
  box-shadow: 0px 10px 11px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #ffffff;
  width: 190px;
  font-size: 0.75em;
}

.container-education-box p:first-child,
p:last-child {
  color: #867c7c;
}

.certificacoe {
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  border-radius: 5px;
  padding: 0 15px;
}

.continue-education-certification {
  display: flex;
  text-align: center;
  background-color: #ffffff;
  font-size: 0.75em;
}

.box-certificacoes {
  display: flex;
  text-align: center;
  background-color: #ffffff;
  font-size: 0.75em;
}

hr {
  border-top: 1px dashed #bab3b3;
}
/* .box-certificacoes-last {
  display: flex;
  text-align: center;

  background-color: #ffffff;
} */

.continue-education-certification div {
  padding: 10px;
  flex: 1;
  align-self: center;
}

.box-certificacoes div {
  padding: 10px;
  flex: 1;
  align-self: center;
}



a {
  font-weight: 100;
  color: #131212;
}

.instituicao {
  color: #867c7c;
}

.container-education  {
  display: flex;
  gap: 15px;
  margin-top: 35px;
}

.container-formacao {
  display: flex;
  gap: 15px;
  margin-top: 35px;
}

.container-continue-education {
  display: flex;
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  margin-bottom: 25px;
 width: 100%;
}

.alguns-cursos {
  display: flex;
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  margin-bottom: 25px;
 width: 100%;
}

.container-continue-education {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
}

.box-alguns-cursos {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
}




.description-separator {
  align-self: center;
  color: #ffffff;
  flex: 1;
  text-align: center;
  font-size: 0.875em;
  font-weight: bold;
}

.after {
  height: 20px;
  border-right: 4px solid #ffffff;
  margin: 8px;
  align-self: center;
}

.certification-link:hover{
 color: blue !important;
 text-decoration: underline;
}

@media screen and (max-width: 1022px) {
 .container-rota-curso {
    flex-direction: column;
  }
  .section-education {
        margin-top: 20px;
  }
  .container-education {
    flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
  .after{
    display: none;
  }
.container-continue-education {
  width: 100%;
}
.container-continue-education{
  width: initial;
}
.experience-title {
  font-size: 2em;
}

}
</style>

<script>
import data from "@/mixins/data.js";

export default {
  created() {
    this.experiences = data.experiences;
    this.formacao = data.formacao;
    this.certificacao = data.certificacao;
    this.cursos = data.cursos;
  },
};
</script>