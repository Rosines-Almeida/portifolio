<template>
    <nav>
      <ul v-for="(contato, index) in contatos"
        v-bind:key="index" class="contato-links"> 
          <li class="contato">  
             <i :class="contato.icon"> <a :href="contato.link" target="_blank"></a> </i>
        </li> 
      </ul>
    </nav>
</template>

<script>
export default {
  name: "Rodape"
};
</script>

<style scoped> 

nav { 
  margin: 0 auto;
  display: flex;
  justify-content: end;
  padding: 20px 111px;
} 

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}

.icon {
  background-repeat: no-repeat;
  height: 27px;
  width: 27px;
  margin: 16px 10px 0px 0px;
}

.ic_linkedin {
  background-image: url("../assets/ic_linkedin.png");
}

.ic_email {
  background-image: url("../assets/ic_email.svg");
}

.ic_gitHub {
  background-image: url("../assets/ic_gitHub.svg");
}

.contato {
  display: flex;
  padding: 0 10px;
}
  
</style>

<script>
import data from "@/mixins/data.js";

export default {
 
  created() { 
    this.contatos = data.contatos;
  },
};

</script>