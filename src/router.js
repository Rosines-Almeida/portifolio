import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contato from './views/Contato.vue'
import Cursos from './views/Cursos.vue'
import Projetos from './views/Projetos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contato",
      name: "contato",
      component: Contato
    },
    {
      path: "/cursos",
      name: "cursos",
      component: Cursos
    },
    {
      path: "/projetos",
      name: "projetos",
      component: Projetos
    },
    {
      path: "/cursos/:curso",
      name: "curso",
      component: Curso,
      props: true,
      children: [
        {
          path: ":aula",
          name: "aula",
          component: Aula,
          props: true,
        }
      ]
    },
  ]
})