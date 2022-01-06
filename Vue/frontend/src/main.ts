import { createApp } from 'vue'
import App from './App.vue'
import higtlight from '@/directives/highlight'

const app = createApp(App)

app.directive('higtlight', higtlight)

app..mount('#app')
