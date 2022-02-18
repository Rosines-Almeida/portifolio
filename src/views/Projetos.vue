<template>
  <div class="container-projeto">
    <div class="projeto-background">
      <div class="projeto-description">
        <div class="title">Projetos</div>
        <div class="description">Conheça alguns projetos</div>
        <p>
          Projetos desenvolvidos em cursos e treinamentos. <br />Veja mais
          projetos no gitHub
        </p>
      </div>
    </div>

    <div class="box-projetos">
      <div>
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

      <div>
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
      <div>
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

      <div>
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
  padding: 210px 50px;
  text-align: center;
  min-height: 100vh;
}

.description {
  font-size: 1.375rem;
  margin-top: 25px;
  /* margin-bottom: 40px;; */
}

.projeto-description p {
  font-size: 1.12rem;
  margin-top: 45px;
}

.projeto-background {
  margin: 0px 100px 0 20px;
  background: #6f94a9;
  width: 35%;
  /* margin-right: 100px; */
}

.title {
  /* color: white; */
  font-weight: bold;
  font-size: 36px;
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

.projeto-description-box {
  display: flex;
  flex-wrap: wrap;
  height: 70px;
  background-color: white;
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  width: 352px;
  flex-direction: column;
}

.projeto-link {
  margin: auto auto;
  font-size: 12px;
  color: #131212;
  display: inline-block;
}

.projeto-liguagens {
  display: flex;
  gap: 5px;
  margin: auto auto;
}

.liguagen {
  background-color: #f5f5f5;
  width: 45px;
  height: 11px;
  font-size: 8px;
  text-align: center;
  border-radius: 10px;
  color: #131212;
}
</style>