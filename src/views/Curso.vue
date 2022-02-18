<template>
  <div class="container-rota-curso">
    <!-- <div v-if="loading">
      <PageLoading/>
    </div> -->
    <div class="container-experiencia">
      <p>experiencia</p> 
    </div>

      <div class="container-curso">
        <p>curso</p>
    </div>
    <transition>  
    </transition>
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
 .container-rota-curso{
  margin: 0px;
  padding: 0px;
  display: flex;
 }

 .container-experiencia{
     margin: 0px 100px 0 20px;
 
  width: 50%;
  min-height: 100vh;
 
 }

 .container-curso{
 background: #6f94a9;
 }

</style>
