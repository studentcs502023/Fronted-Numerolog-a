import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import router from './routes/routes'
import App from './App.vue'

const app = createApp(App)

app.use(router)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.mount('#app')
