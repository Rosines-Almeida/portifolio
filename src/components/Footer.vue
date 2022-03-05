<template>
    <footer>
      <ul v-for="(contato, index) in contatos"
        v-bind:key="index" class="contato-links"> 
          <li class="contato">  
             <i :class="contato.icon"> <a :href="contato.link" target="_blank"></a> </i>
        </li> 
      </ul>
    </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped> 

footer { 
  margin: 0 auto;
  display: flex;
  justify-content: end;
  padding: 10px 111px;  
  background-color: #575454;
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
    height: 33px;
    width: 32px; 
   margin: 0px 10px 0px 0px
}

.ic_linkedin {
  background-image: url("../assets/002-linkedin.png");
}

.ic_email {
  background-image: url("../assets/001-email.png");
}

.ic_gitHub {
  background-image: url("../assets/003-github.png");
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