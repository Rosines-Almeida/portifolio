<template>
  <header>
    <nav class="topnav">
      <router-link to="/"
        ><div @click="closeMenu()" class="logo icon-home"></div
      ></router-link>
      <div id="myLinks" @click="closeMenu()">
        <router-link to="/projetos" class="a menu" @click="closeMenu()"
          >Projetos</router-link
        >
        <router-link to="/cursos" class="a menu"
          >Experiência e Cursos</router-link
        >
        <router-link to="/contato" class="a menu">Contatos</router-link>
      </div>
      <a href="javascript:void(0);" class="icon" @click="openMenu()">
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    openMenu: function () {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
    closeMenu: function () {
      console.log("close");
      let width = screen.width;
      if (width <= 1022) {
        var x = document.getElementById("myLinks");
        x.style.display = "none";
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
  color: #131212;
}
.menu {
  padding: 0 10px;
  margin-left: 10px;
}

a.router-link-active {
  color: #6f94a9;
}

nav {
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  align-items: center;
  padding: 20px 50px 20px 20px;
}

a.router-link-active {
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

.topnav #myLinks.a {
  display: inline-block;
  padding: 0 10px;
  margin-left: 10px;
  font-weight: 100 !important;
}

a {
  font-weight: 100 !important;
}

@media screen and (min-width: 1022px) {
  .icon {
    display: none;
  }
  .topnav #myLinks {
    display: block;
  }
}

@media screen and (max-width: 1022px) {
  .topnav {
    overflow: hidden;
    position: relative;
  }

  .topnav #myLinks {
    display: none;
  }

  .topnav a {
    color: #131212 !important;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
    font-weight: bold !important;
  }

  .topnav a.icon {
    color: black;
    display: block;
    right: 0;
    top: 0;
    background-color: #ddd;
  }

  .myLinks a {
    background: white;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav a {
    color: #131212;
    padding: 9px;
    font-size: 12px;
  }

  .active {
    background-color: #04aa6d;
    color: white;
  }
}
</style>