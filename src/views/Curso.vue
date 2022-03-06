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
 

</style>
