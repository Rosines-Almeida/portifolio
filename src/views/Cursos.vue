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
        <div class="education-type">
          <div class="education-description">Formação</div>
          <div class="education-description-detail"></div>
        </div>
        <div
          class="d-flex gap-10"
          v-for="(item, index) in formation"
          :key="index"
        >
          <div class="container-education-box">
            <p>{{ item.grade }}</p>
            <p>{{ item.formation }}</p>
            <p>{{ item.institution }}</p>
          </div>
        </div>
      </div>

      <div class="container-education">
        <div class="education-type">
          <div class="education-description">Certificação</div>
          <div class="education-description-detail"></div>
        </div>
        <div
          class="d-flex gap-10"
          v-for="(item, index) in certification"
          :key="index"
        >
          <div class="container-education-box">
            <p></p>
            <a class="certification-link" :href="item.link" target="_blank">
              <p class="certification-link" v-html="item.formation"></p>
            </a>
            <p>{{ item.institution }}</p>
          </div>
        </div>
      </div>

      <div class="container-education">
        <div class="education-type">
          <div class="education-description">
            Alguns <br />
            Cursos
          </div>
          <div class="education-description-detail"></div>
        </div>
        <div class="container-continue-education">
          <div class="box-alguns-cursos">
            <div v-for="(course, index) in courses" :key="index">
              <div class="continue-education-certification">
                <div>
                  <a :href="course.link" target="_blank">{{
                    course.formation
                  }}</a>
                </div>
                <div
                  class="continue-education-institution"
                  v-html="course.institution"
                ></div>
                <div v-html="course.hours"></div>
              </div>
              <hr v-if="courses.length - 1 != index" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style>
.container-rota-curso {
  margin: 0px;
  padding: 0 20px;
  display: flex;
}

.section-experience {
  padding-right: 40px;
}
.d-flex {
  display: flex;
}

.gap-10 {
  gap: 10;
}

.separator::after {
  content: " ";
  height: 200px;
  border-right: 4px solid #299492;
  margin: 33px;
  align-self: center;
}

.separator {
  align-self: center;
  color: #131212;
  width: 91px;
  font-size: 1.125em;
  font-weight: bold;
  text-indent: 15px;
}

.education-type {
  display: flex;
  width: 115px;
}

.education-description {
  align-self: center;
  color: #ffffff;
  flex: 1;
  text-align: center;
  font-size: 0.875em;
  font-weight: bold;
}

.experience-box {
  display: flex;
  width: 80%;
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
  padding: 6px 15px;
}

.experience-title {
  font-size: 2.12em;
  color: #bab3b3;
  font-weight: bold;
  padding: 0px 88px;
  margin-top: 30px;
}

.section-education {
  padding: 0 20px;
  background: #6f94a9;
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

.continue-education-certification {
  display: flex;
  text-align: center;
  background-color: #ffffff;
  font-size: 0.75em;
}

hr {
  border-top: 1px dashed #bab3b3;
}

.continue-education-certification div {
  padding: 10px;
  flex: 1;
  align-self: center;
}

a {
  font-weight: 100;
  color: #131212;
}

.continue-education-institution {
  color: #867c7c;
}

.container-education {
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

.education-description-detail {
  height: 20px;
  align-self: center;
  border-right: 4px solid #bab3b3;
  margin: -15px;
}

.certification-link:hover {
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
  .education-description-detail {
    display: none;
  }
  .container-continue-education {
    width: 100%;
  }
  .container-continue-education {
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
    this.formation = data.formation;
    this.certification = data.certification;
    this.courses = data.courses;
  },
};
</script>