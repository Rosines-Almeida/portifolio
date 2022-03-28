<template>
  <div>
    <div class="container-rota-home">
      <div class="photo"> 
        <img class="photo-perfil" src="../assets/photo_perfil.png" />
      </div>
    </div>
    <div class="home bg-dots">
      <div class="section-description">
        <div class="img">
          <div class="home-description">Oi, sou a Rosinês</div>
          <div class="home-about">Analista de desenvolvimento <br>Front-End</div>
          <div class="home-description-UF">São Paulo, SP</div>
        </div>
      </div>
      <div class="section-apresentation">
        <div class="apresentation-description">
          <div>
            Desenvolvedora Front-End com experiência em <br />
            JavaScript, HTML, CSS, SASS, AngularJs, VUE, TypeScript.
          </div>
          <div class="home-link">
            Conheça um pouco mais do meu perfil com meus  <br />
            <router-link to="/projetos" class="home-link-route ">
              projetos pessoais </router-link
            ><br /> e com minha 
            <router-link to="/cursos" class="home-link-route">
              experiência profissional, cursos e certificações</router-link
            >.<br />
          </div>
        </div>
      </div>
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
  height: 150px;
  margin: 0px 20px 0px 20px;
}

.photo {
  height: 165px;
  width: 165px;
  border-radius: 50%;
  background-color: #f5f5f5;
  left: 17%;
  position: absolute;
  margin-top: 5%;
 
}

.photo-perfil{
    max-width: 100%; 
    padding: 8px 0px 0px 0px;
}

.home {
  display: flex;
  margin: 0px 20px 0px 20px;
  align-items: center;
  padding-bottom: 13%;
}

.home-link{
  margin-top: 15px;
}

.home-link-route{
  text-decoration: underline;
  font-weight: bold ;
  color: #6f94a9;
}

.apresentation-description {
  padding-right: 40px;
  text-align: center;
  color: #867c7c;
}

.home-description {
  font-size: 24px;
  margin-top: 15px;
}
.home-description-UF {
  font-size: 16px;
  margin-top: 15px;
}

.home-about {
  font-size: 20px;
  margin-top: 15px;
}

.section-description {
  width: 50%;
  margin: 20px 20px 20px 83px;
}

.section-apresentation {
  width: 50%;
  padding: 20px;
}

.img {
  width: 60%;
  height: auto;
  background: linear-gradient(to right, #9b9a9a 4px, transparent 4px) 0 0,
    linear-gradient(to right, #9b9a9a 4px, transparent 4px) 0 100%,
    linear-gradient(to left, #9b9a9a 4px, transparent 4px) 100% 0,
    linear-gradient(to left, #9b9a9a 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, #9b9a9a 4px, transparent 4px) 0 0,
    linear-gradient(to bottom, #9b9a9a 4px, transparent 4px) 100% 0,
    linear-gradient(to top, #9b9a9a 4px, transparent 4px) 0 100%,
    linear-gradient(to top, #9b9a9a 4px, transparent 4px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 15% 22%;
  padding: 43px 23px 23px 41px;
  margin-top: 30px;
}

@media screen and (max-width: 1022px) {
  .container-rota-home {
    display: flex;
    justify-content: center;
  }
  .home {
    flex-direction: column;
    display: block;
  }
  .photo {
    left: auto;
  }
  .section-description {
    text-align: center;
    width: auto;
    display: flex;
    justify-content: center;
    margin: 0 20px;
  }
  .img {
    width: 50%;
    word-wrap:break-word;
  }
  .section-apresentation {
    text-align: center;
    width: auto;
    margin-top: 10%;
  }
  .apresentation-description {
    padding: 0px;
  }
}
</style>