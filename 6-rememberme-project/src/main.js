import './assets/main.css'
import BaseCard from './components/UI/BaseCard.vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('base-card', BaseCard)

app.mount('#app')
