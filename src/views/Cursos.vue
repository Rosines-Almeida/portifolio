<template>
  <div class="container-rota-curso">
    <div class="container-experiencia">
      <p class="title-experiencia">Experiência</p>

      <div
        class="experiencia mt-3"
        v-for="(experiencia, index) in experiencias"
        :key="index"
      >
        <div class="separator">{{ experiencia.year }}</div>
        <div class="box-experiencia">
          <div class="box-experiencia-text">
            {{ experiencia.description }}
          </div>
          <div class="box-experiencia-skill">
            <div>{{ experiencia.title }}</div>
            <div class="skills">
              <p
                v-for="(skill, index) in experiencia.skills"
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

    <div class="container-curso">
      <div class="container-formacao">
        <div class="separator-flex">
          <div class="description-separator">Formação</div>
          <div class="after"></div>
        </div>
        <div class="experiencia" v-for="(item, index) in formacao" :key="index">
          <div class="box-formacao">
            <p>{{ item.tipo }}</p>
            <p>{{ item.formacao }}</p>
            <p>{{ item.instituicao }}</p>
          </div>
        </div>
      </div>

      <div class="container-formacao">
        <div class="separator-flex">
          <div class="description-separator">Certificação</div>
          <div class="after"></div>
        </div>
        <div
          class="experiencia"
          v-for="(item, index) in certificacao"
          :key="index"
        >
          <div class="box-formacao">
            <p></p>
          
              <a class="link" :href="item.link" target="_blank" >  <p class="link" v-html="item.formacao"></p></a>
         
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

.container-experiencia {
 padding-right: 40px;
}
.experiencia {
  display: flex;
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

.box-experiencia {
  display: flex;
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  padding: 20px;
  flex-wrap: wrap;
}

.box-experiencia-text {
  color: #867c7c;
  flex: 1;
  align-self: center;
  font-size: 0.75em;
}

.box-experiencia-skill {
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

.title-experiencia {
  font-size: 2.12em;
  color: #bab3b3;
  font-weight: bold;
    padding: 0px 59px;
    margin-top: 30px;
}

.container-curso {
  padding: 0 20px;
  background: #6f94a9;
  /* width: 50%; */
}

.box-formacao {
  text-align: center;
  padding: 20px 20px;
  box-shadow: 0px 10px 11px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #ffffff;
  width: 190px;
  font-size: 0.75em;
}

.box-formacao p:first-child,
p:last-child {
  color: #867c7c;
}

.certificacoe {
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  border-radius: 5px;
  padding: 0 15px;
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
.box-certificacoes-last {
  display: flex;
  text-align: center;

  background-color: #ffffff;
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

.container-formacao {
  display: flex;
  gap: 15px;
  margin-top: 35px;
}

.alguns-cursos {
  display: flex;
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  margin-bottom: 25px;
 width: 100%;
}

.box-alguns-cursos {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
}

.separator-flex {
  display: flex;
  width: 115px;
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

.link:hover{
 color: blue !important;
 text-decoration: underline;
}

@media screen and (max-width: 1022px) {
 .container-rota-curso {
    flex-direction: column;
  }
  .container-curso{
        margin-top: 20px;
  }
  .container-formacao{
    flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
  .after{
    display: none;
  }
.box-alguns-cursos {
  width: 100%;
}
.alguns-cursos{
  width: initial;
}
.title-experiencia {
  font-size: 2em;
}

}
</style>

<script>
import data from "@/mixins/data.js";

export default {
  created() {
    this.experiencias = data.experiencias;
    this.formacao = data.formacao;
    this.certificacao = data.certificacao;
    this.cursos = data.cursos;
  },
};
</script>