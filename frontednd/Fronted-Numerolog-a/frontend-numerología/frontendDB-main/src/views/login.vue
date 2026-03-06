<!-- <template>
  <input type="text" v-model="usuario">
  <input type="text" v-model="pass">
  <button @click="ingresar()">Login</button>
</template>

<script setup>
import { ref } from 'vue';
import { postData } from './services/apiCliente';
import { useAuthStore } from './stores/Auth';

let usuario = ref("")
let pass = ref("")
const useAuth = useAuthStore()

async function ingresar(){
  try {
    let res = await postData("login",{
      email: usuario.value,
      password: pass.value
    })
    console.log(res);
    useAuth.token = res.token
    
  } catch (error) {
    console.log(error.response);
    
  }
}

</script> -->

<template>
  <div class="layout">



    <!-- 🔵 SIDEBAR estilo dashboard -->
    <aside class="sidebar">
      <div class="logo">✨ CosmosNum</div>

      <nav>
        <ul>
          <li class="active">Inicio</li>
          <li>Mi Perfil</li>
          <li>Lecturas</li>
          <li>Pagos</li>
        </ul>
      </nav>

      <div class="logout">Cerrar sesión</div>
    </aside>

    <!-- 🔵 CONTENIDO PRINCIPAL -->
    <main class="content">

      <div class="login-card">
        <h2>Acceso al Sistema</h2>
        <p>Ingresa tus credenciales para continuar</p>

        <div class="input-group">
          <input type="email" v-model="usuario" placeholder="Correo electrónico" />
        </div>

        <div class="input-group">
          <input type="password" v-model="pass" placeholder="Contraseña" />
        </div>

        <button class="btn-login" @click="ingresar()">
          Ingresar
        </button>


       <router-link to="/registro" class="btn-register">
  Registrarse
</router-link>
      </div>

    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { postData } from '../services/apiCliente';
import { useAuthStore } from '../stores/Auth';

let usuario = ref("")
let pass = ref("")
const useAuth = useAuthStore()
function registrar(){
  router.push('/registro')
}
async function ingresar(){
  try {
    let res = await postData("login",{
      email: usuario.value,
      password: pass.value
    })
    console.log(res);
    useAuth.token = res.token
    
  } catch (error) {
    console.log(error.response);
  }
}
</script>

<style>
.layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #0b0e23, #141a3a);
  color: white;
  font-family: 'Segoe UI', sans-serif;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background: #0d1735;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  font-weight: bold;
  margin-bottom: 30px;
  color: #4f94ff;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.3s;
  color: #a1a8c0;
}

.sidebar li:hover,
.sidebar .active {
  background: #1e3a8a;
  color: white;
}

.logout {
  font-size: 14px;
  cursor: pointer;
  opacity: 0.7;
}

/* Content */
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Login Card */
.login-card {
  background: #111d3a;
  padding: 40px;
  border-radius: 20px;
  width: 350px;
  box-shadow: 0 10px 40px rgba(79, 148, 255, 0.2);
  text-align: center;
}

.login-card h2 {
  margin-bottom: 10px;
}

.login-card p {
  margin-bottom: 25px;
  color: #a1a8c0;
  font-size: 0.9rem;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #1c2346;
  color: white;
  outline: none;
}

.input-group input:focus {
  box-shadow: 0 0 0 2px #4f94ff;
}

.btn-login {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #2563eb, #4f94ff);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 148, 255, 0.4);
}
</style>