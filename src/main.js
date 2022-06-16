import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import '@/assets/css/reset.css'
import '@/assets/css/base.css'
const  app = createApp(App)
app.use(router)
app.mount('#app')

