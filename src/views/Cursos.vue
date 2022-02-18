<template>
  <div class="container-rota-curso">
    <!-- <div v-if="loading">
      <PageLoading/>
    </div> -->
    <div class="container-experiencia">
      <p class="title-experiencia">Experiência</p>

      <div class="experiencia">
        <div class="separator">2021</div>
        <div class="box-experiencia">
          <div class="box-experiencia-text">
            Atuo no projeto com melhorias e nova simplemantações atuando com
            typescriprt, vue, scss, html
          </div>
          <div class="box-experiencia-skill">
            <div>Desenvolvedora Front-end Pleno</div>
            <div class="skills">
              <p class="skill">lig 1</p>
              <p></p>
              <p class="skill">lig 2</p>
              <p></p>
              <p class="skill">lig 3</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-curso">
      <p>curso</p>

      <!-- formação e ecurso -->
      <div class="container-formacao">
        <div class="separator">Formação</div>
        <div class="experiencia">
          <div class="box-formacao">
            <p>Bootcamp</p>
            <p>Desenvolvimento Front End</p>
            <p>Laboratória</p>
          </div>
        </div>

        <div class="experiencia">
          <div class="box-formacao">
            <p>Bootcamp</p>
            <p>Desenvolvimento Front End</p>
            <p>Laboratória</p>
          </div>
        </div>
      </div>

      <!-- certificação -->

      <div class="container-formacao">
        <div class="separator">Certificação</div>
        <div class="experiencia">
          <div class="box-formacao">
            <p>
              Exam 480: Programming in HTML5 <br />
              with JavaScript and CSS3 Microsoft
            </p>
            <p>Microsoft</p>
          </div>
        </div>
        <div class="experiencia">
          <div class="box-formacao">
            <p>Exam 480: Programming i</p>
            <p>Microsoft</p>
          </div>
        </div>
      </div>

      <!-- alguns cursos -->

      <div class="experiencia">
        <div class="separator">Alguns <br />Cursos</div>
        <div class="box-alguns-cursos">
          <div class="box-certificacoes">
            <div class="curso">React completo</div>
            <div class="instituicao">Origamid</div>
            <div class="horas">56 horas</div>
          </div>
          <div class="box-certificacoes">
            <div class="curso">React completo</div>
            <div class="instituicao">Origamid</div>
            <div class="horas">56 horas</div>
          </div>
        </div>
      </div>
      <div class="container-curso"></div>
    </div>

    <transition> </transition>
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
.container-rota-curso {
  margin: 0px;
  padding: 0px;
  display: flex;
}
/* experiencia */
.container-experiencia {
  margin: 0px 100px 0 53px;
  width: 50%;
  min-height: 100vh;
}
.experiencia {
  display: flex;
  gap: 10;
}
.separator {
  align-self: center;
  color: #131212;
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
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  flex-wrap: wrap;
}

.box-experiencia-text {
  color: #867c7c;
  flex: 1;
  align-self: center;
}

.box-experiencia-skill {
  color: #131212;
  flex: 1;
  margin-left: 30px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
}

.skill {
  background-color: #f5f5f5;
  margin: 10px;
  border-radius: 2px;
  color: #131212;
  width: 100px;
  height: 18px;
  text-align: center;
}

.title-experiencia {
  font-size: 2.6em;
  color: #bab3b3;
  font-weight: bold;
  margin-top: 60 px;
  padding: 16px 55px;
}
/* fim experienci */

.container-curso {
  padding: 0px 0px 0 53px;
  background: #6f94a9;
  width: 50%;
}

/* formaçãoe curso */
.box-formacao {
  text-align: center;
  padding: 20px 20px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #ffffff;
  width: 190px;
}

.box-formacao p:first-child,
p:last-child {
  color: #867c7c;
}
.certificacoe {
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0 15px;
}

.box-certificacoes {
  display: flex;
  text-align: center;
  border-bottom: 1px dashed #bab3b3;
  background-color: #ffffff;
}

.box-certificacoes div {
  padding: 10px;
  flex: 1;
}

.instituicao {
  color: #867c7c;
}

.container-formacao {
  display: flex;
  gap: 15px;
  margin-top: 60px;
}

.box-alguns-cursos{
  background-color: #ffffff;
      padding: 10px;
    border-radius: 5px;
    margin-top: 60px;
} 
 
</style>
