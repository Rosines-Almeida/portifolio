<template>
  <div id="app">
    <TheHeader />
    <router-view class="main"></router-view>
      <Footer /> 
   
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

import Footer from "./components/Footer.vue";

export default {
  components: {
    TheHeader,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
  background-color: #f5f5f5;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

img {
  max-width: 100%;
}

a.router-link-active {
  color: #4b8;
}

.bg-dots{
   background-image: url("./assets/bg_dots.png"); 
}

.mt-3 {
  margin-top: 30px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

a:hover{
 color: blue;
 text-decoration: underline;
}
 
 
@media screen and (max-width: 400px) {
  .conteudo {
    display: block;
  }
}

</style>
