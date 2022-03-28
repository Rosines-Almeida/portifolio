<template>
  <div class="container-projeto bg-dots">
    <div class="projeto-background">
      <div class="projeto-introduce">
        <div class="introduce-title">Projetos</div>
        <div class="introduce-description">Conheça meus projetos pessoais.</div>
        <p>
          Desenvolvidos para treinar minhas habilidades em diversas tecnologias
          Front-End.
          <br />E veja mais no
          <a class="introduce-link" href="https://github.com/Rosines-Almeida">
            gitHub
          </a>
          <span>
            <a href="https://github.com/Rosines-Almeida" target="_blank"
              ><i class="contato icon ic_gitHub"> </i>
            </a>
          </span>
        </p>
      </div>
    </div>

    <div class="bg-dots">
      <div class="box-projetos">
        <div class="box-projetos-shadow">
          <div class="projeto-gift">
            <img src="../assets/projeto_dog.gif" />
          </div>
          <div class="box-projeto-description">
            <div class="projeto-link">
              <a class="projeto-link" :href="projetos[0].link" target="_blank"
                >{{ formatLink(projetos[0].link) }}
              </a>
            </div>
            <div class="projeto-skills">
              <div
                v-for="(skill, index) in projetos[0].skills"
                :key="index"
                class="skill"
              >
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-projetos">
        <div class="box-projetos-shadow">
          <div class="projeto-gift">
            <img src="../assets/projeto_tecno.gif" />
          </div>
          <div class="box-projeto-description">
            <div class="projeto-link">
              <a class="projeto-link" :href="projetos[1].link" target="_blank"
                >{{ formatLink(projetos[1].link) }}
              </a>
            </div>
            <div class="projeto-skills">
              <div
                v-for="(skill, index) in projetos[1].skills"
                :key="index"
                class="skill"
              >
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-projetos">
        <div class="box-projetos-shadow">
          <div class="projeto-gift">
            <img src="../assets/projeto_quiz.gif" />
          </div>
          <div class="box-projeto-description">
            <div class="projeto-link">
              <a class="projeto-link" :href="projetos[2].link" target="_blank"
                >{{ formatLink(projetos[2].link) }}
              </a>
            </div>
            <div class="projeto-skills">
              <div
                v-for="(skill, index) in projetos[2].skills"
                :key="index"
                class="skill"
              >
                {{ skill }}
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

.projeto-introduce {
  color: white;
  text-align: center;
  margin-top: 15%;
}

.projeto-introduce p {
  color: white;
}

.introduce-description {
  font-size: 1.2em;
  margin-top: 25px;
}

.introduce-link {
  color: white !important;
  font-weight: 400;
}

.projeto-introduce p {
  font-size: 1.125em;
  margin-top: 45px;
}

.projeto-background {
  margin: 0px 100px 0 20px;
  background: #6f94a9;
  width: 35%;
}

.introduce-title {
  color: white;
  font-size: 2em;
  font-weight: bold;
  padding: 16px 55px;
}

.box-projetos {
  display: flex;
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

.projeto-gift img {
  border-radius: 6px 6px 0 0;
}

.box-projetos-shadow {
  box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
  height: auto;
  border-radius: 0px 0px 6px 6px;
  width: 100%;
}

.box-projeto-description {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  background-color: white;
  border-radius: 0px 0px 6px 6px;
  width: 100%;
}

.projeto-link {
  margin: auto auto;
  font-size: 1em;
  color: #6f94a9 !important;
  display: inline-block;
  margin-top: 15px;
  text-decoration: underline;
  margin-bottom: 10px;
  text-align: center;
}

.projeto-skills {
  display: flex;
  gap: 5px;
  margin: auto auto;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

.skill {
  background-color: #58c3ff;
  font-size: 0.625em;
  text-align: center;
  border-radius: 7px;
  color: white !important;
  align-self: center;
  padding: 3px 6px;
  font-weight: bold;
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
    margin: 0 20px;
  }

  .projeto-background {
    width: 100%;
    margin: 0;
  }

  .box-projetos {
    display: block;
    margin: 30px;
  }

  img {
    width: 100%;
  }

  .introduce-title {
    font-size: 1.5em;
    font-weight: bold;
    padding: 16px 55px;
  }

  .introduce-description {
    font-size: 0.875em;
    margin-top: 5px;
  }

  p {
    font-size: 0.875em !important;
  }

  .projeto-introduce {
    margin-top: 5%;
  }

  .projeto-introduce p {
    margin: 0;
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
    formatLink: function (link) {
      return link.replace("https://", "");
    },
    getImage: function (img) {
      return `/img/${img}`;
    },
  },
};
</script>