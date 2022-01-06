import { createApp } from 'vue'
import App from './App.vue'
import higtlight from '@/directives/highlight'
import '@fortawesome/fontawesome-free/css/all.css'
import ButtonStyled from '@components/Events/ButtonStyled.vue'

const app = createApp(App)

app.component('ButtonStyled', ButtonStyled)

app..mount('#app')
