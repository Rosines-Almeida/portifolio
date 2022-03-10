<template>
  <header> 
    <nav class="topnav">
      <!-- <a href="#home" class="active">Logo</a> -->
       <router-link to="/"><div class="logo icon-home"></div></router-link>
      <div id="myLinks">
        <router-link to="/projetos" class="a menu">Projetos</router-link>
        <router-link to="/cursos" class="a menu">Experiência e Cursos</router-link>
        <router-link to="/contato"  class="a menu">Contatos</router-link>
      </div>
      <a href="javascript:void(0);" class="icon" @click="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    myFunction: function () {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
  },
};
</script>

<style scoped>
header {
  background: #f5f5f5;
}

header a {
  color: #575454;
}
.menu{
padding: 0 10px;
    margin-left: 10px;
}

a.router-link-active {
  color: #6f94a9;
}

nav {
  /* max-width: 800px; */
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  align-items: center;
  padding: 20px 50px;
}

a.router-link-active{
  flex: 1;
}
.icon-home {
  background-image: url("../assets/home.svg");
  background-repeat: no-repeat;
  height: 46px;
  width: 46px;
}

.logo a {
  font-size: 1.3rem;
  color: white;
}
.topnav #myLinks {
    display: block;
  }
.topnav #myLinks.a{
  display: inline-block;
 padding: 0 10px;
    margin-left: 10px;
}
/* 
li a {
  padding: 0 10px;
  margin-left: 10px;
} */
@media screen and (min-width: 1022px) {
  .icon{
    display: none;
  }
   
}
@media screen and (max-width: 1022px) {
  .topnav {
    overflow: hidden;
    /* background-color: #333; */
    position: relative;
  }

  .topnav #myLinks {
    display: none;
  }

  .topnav a {
    color: #ddd;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
  }

  .topnav a.icon {
      color: #ddd;
    display: block;
    /* position: absolute; */
    right: 0;
    top: 0;
  }
  .myLinks a {
    background: white;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .active {
    background-color: #04aa6d;
    color: white;
  }
}
</style>
