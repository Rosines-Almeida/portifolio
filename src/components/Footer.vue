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
  display: flex;
  justify-content: end; 
  background-color: #575454;
  width: 100%;
height: 100px; 
bottom: 0;
left: 0;     
} 

ul{
 align-self: center;
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

/* @media  (min-width:745px)  and (max-width: 1022px) {
 footer {
   width: 107%;
   background-color: red
  }
} */
  
</style>

<script>
import data from "@/mixins/data.js";

export default {
 
  created() { 
    this.contatos = data.contatos;
  },
};

</script>