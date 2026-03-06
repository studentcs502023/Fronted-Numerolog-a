<!-- <template>
    <div>

        <h1>hola</h1>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { postData } from "../services/apiCliente";

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const fechanacimiento = ref("");
const role = ref(0); // Por defecto usuario

const register = async () => {

  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  try {

    await postData("register", {
      nombre: name.value,
      fechanacimiento: fechanacimiento.value,
      email: email.value,
      password: password.value,
      role: role.value
      // estado no se manda porque tiene default
    });

    router.push("/");

  } catch (error) {
    console.log(error.response);
  }
};
</script> -->


<template>
  <div class="container">
    <div class="card">

      <div class="logo">✨</div>
      <h1>Numerología Esencial</h1>
      <p class="subtitle">Descubre tu destino a través de los números</p>

      <div class="form-box">
        <h2>Crear Nueva Cuenta</h2>

        <label>Nombre Completo</label>
        <div class="input-group">
          <input type="text" v-model="name" required />
        </div>

        <label>Fecha de Nacimiento</label>
        <div class="input-group">
          <input type="date" v-model="fechanacimiento" required />
        </div>

        <label>Correo Electrónico</label>
        <div class="input-group">
          <input type="email" v-model="email" required />
        </div>

        <label>Contraseña</label>
        <div class="input-group">
          <input type="password" v-model="password" required />
        </div>

        <label>Confirmar Contraseña</label>
        <div class="input-group">
          <input type="password" v-model="confirmPassword" required />
        </div>

        <label>Rol</label>
        <div class="input-group">
          <select v-model="role">
            <option :value="0">Usuario</option>
            <option :value="1">Administrador</option>
          </select>
        </div>

        <button class="btn-primary" @click="register">
          Crear Cuenta →
        </button>

        <div class="login-link">
          ¿Ya tienes una cuenta?
          <router-link to="/">Inicia sesión</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { postData } from "../services/apiCliente";

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const fechanacimiento = ref("");
const role = ref(0);


const register = async () => {

  console.log("🚀 Iniciando registro...");

  if (!name.value || !email.value || !password.value || !fechanacimiento.value) {
    console.log("❌ Campos vacíos");
    alert("Todos los campos son obligatorios");
    return;
  }

  if (password.value !== confirmPassword.value) {
    console.log("❌ Las contraseñas no coinciden");
    alert("Las contraseñas no coinciden");
    return;
  }

  const usuarioData = {
    nombre: name.value,
    fechanacimiento: fechanacimiento.value,
    email: email.value,
    password: password.value,
    role: role.value
  };

  console.log("📦 Datos que se enviarán al backend:", usuarioData);

  try {

    const response = await postData("");

    console.log("✅ Respuesta del backend:", response);
    console.log("✅ Datos devueltos:", response.data);

    alert("Cuenta creada correctamente");
    router.push("/");

  } catch (error) {

    console.log("🔥 ERROR COMPLETO:", error);

    if (error.response) {
      console.log("📡 Status:", error.response.status);
      console.log("📡 Data:", error.response.data);
    }

    alert("Error al registrar usuario");
  }
};
// const register = async () => {

//   if (!name.value || !email.value || !password.value || !fechanacimiento.value) {
//     alert("Todos los campos son obligatorios");
//     return;
//   }

//   if (password.value !== confirmPassword.value) {
//     alert("Las contraseñas no coinciden");
//     return;
//   }

//   try {

//     await postData("", {
//       nombre: name.value,
//       fechanacimiento: fechanacimiento.value,
//       email: email.value,
//       password: password.value,
//       role: role.value
//     });

//     alert("Cuenta creada correctamente");
//     router.push("/");

//   } catch (error) {
//     console.log(error.response);
//     alert("Error al registrar usuario");
//   }
// };
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: radial-gradient(circle at top, #101b3a, #050a1f);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}

.card {
  width: 420px;
  background: #0b1530;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 0 40px rgba(0,0,0,0.6);
  color: white;
}

.logo {
  font-size: 30px;
  margin-bottom: 10px;
  color: #3b82f6;
}

.subtitle {
  font-size: 13px;
  color: #aaa;
  margin-bottom: 25px;
}

label {
  display: block;
  text-align: left;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 5px;
}

.input-group {
  display: flex;
  align-items: center;
  background: #111d3a;
  border-radius: 10px;
  padding: 8px 12px;
}

.input-group input,
.input-group select {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
}

.btn-primary {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: linear-gradient(135deg, #2563eb, #4f94ff);
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 148, 255, 0.4);
}

.login-link {
  margin-top: 15px;
  font-size: 13px;
}

.login-link a {
  color: #3b82f6;
  text-decoration: none;
}
</style>