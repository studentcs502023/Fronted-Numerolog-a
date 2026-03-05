import { createRouter, createWebHistory } from 'vue-router'

// Importar vistas
import Login from '../views/login.vue'
import perfil from '../views/perfil.vue'
import Registro from '../views/registro.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: perfil
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router