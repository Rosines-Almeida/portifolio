<template>
  <div class="container-projeto">
    <div class="projeto-background">
      <div class="projeto-description">
        <div class="title">Projetos</div>
        <div class="description">Conheça alguns projetos</div>
        <p>
          Projetos desenvolvidos em cursos e treinamentos. <br> <br>Veja mais
          projetos no gitHub 
        </p><div > <i class="icon ic_gitHub"> </i> </div>
      </div>
    </div>

    <div class="box-projetos">
      <div class="box-shadow-projetos">
        <div class="projeto-gift">1</div>
        <div class="projeto-description-box">
          <div class="projeto-link">link: jwkejkwjkj</div>
          <div class="projeto-liguagens">
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
          </div>
        </div>
      </div>

      <div class="box-shadow-projetos">
        <div class="projeto-gift">1</div>
        <div class="projeto-description-box">
          <div class="projeto-link">link: jwkejkwjkj</div>
          <div class="projeto-liguagens">
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
          </div>
        </div>
      </div>
    </div>

    <div class="box-projetos">
      <div class="box-shadow-projetos">
        <div class="projeto-gift">1</div>
        <div class="projeto-description-box">
          <div class="projeto-link">link: jwkejkwjkj</div>
          <div class="projeto-liguagens">
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
          </div>
        </div>
      </div>

      <div class="box-shadow-projetos">
        <div class="projeto-gift">1</div>
        <div class="projeto-description-box">
          <div class="projeto-link">link: jwkejkwjkj</div>
          <div class="projeto-liguagens">
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
            <div class="liguagen">react</div>
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
  min-height: 100vh;
  
    padding: 100px 50px;

  
}

.projeto-description p{
    color: white; 
  }

.description {
  font-size: 1.6rem;
  margin-top: 25px;
  /* margin-bottom: 40px;; */
}

.projeto-description p {
  font-size: 1.4rem;
  margin-top: 45px;
}

.projeto-background {
  margin: 0px 100px 0 20px;
  background: #6f94a9;
  width: 35%;
  /* margin-right: 100px; */
}

.title {
  color: white;
  font-weight: bold; 
      
          font-size: 2.6em; 
    font-weight: bold;
    margin-top: 60px;
    padding: 16px 55px;
}

.box-projetos {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 85px;
}

.projeto-gift {
  border-radius: 6px 6px 0px 0px;
  width: 352px;
  height: 352px;
  background-color: #e0e0e0;
}

.box-shadow-projetos{
    box-shadow: 0px 10px 11px rgb(0 0 0 / 25%);
    height: 422px;
    border-radius: 0px 0px 6px 6px; 
}

.projeto-description-box {
  display: flex;
  flex-wrap: wrap;
  height: 70px;
  background-color: white;
  border-radius: 0px 0px 6px 6px; 
  width: 352px;
  flex-direction: column;
}

.projeto-link {
      margin: auto auto;
    font-size: 16px;
    color: #131212;
    display: inline-block;
}

.projeto-liguagens {
  display: flex;
  gap: 5px;
  margin: auto auto;
}

.liguagen {
background-color: #58C3FF;
    width: 83px;
    height: 18px;
    font-size: 14px;
    text-align: center;
    border-radius: 7px;
    color: white; 
}

.icon{
  background-repeat: no-repeat;
  height: 27px;
  width: 27px;
  margin: 16px 10px 0px 0px;

}

.ic_gitHub {
 background-image: url("../assets/ic_gitHub.svg");
}
span{
   font-size: 20px;
  line-height: 60px;
  font-weight: 100;
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
    this.experiencias = data.experiencias; 
  },
};
</script>