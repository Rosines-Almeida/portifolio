<template>
  <header>
    <nav>
      <div class="logo">
        <router-link  to="/"><div class="icon-home"></div></router-link>
      </div>
      <ul>
          <li>
          <router-link to="/projetos">Projetos</router-link>
        </li>
        <li>
          <router-link to="/cursos">Experiência e Cursos</router-link>
        </li>
        <li>
          <router-link to="/contato">Contatos</router-link>
        </li>
      
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
header {
  background: #F5F5F5 ;
}

header a {
  color: #575454;
}

a.router-link-active {
  color: #6F94A9;
}

nav {
  /* max-width: 800px; */
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  align-items: center;
  padding: 20px 50px;
}

.logo {
  flex: 1;
   
}
.icon-home{
  background-image: url('../assets/home.svg');
     background-repeat: no-repeat;
     height: 46px;
     width: 46x; 
}

.logo a {
  font-size: 1.2rem;
  color: white;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}
</style>
