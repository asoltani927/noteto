import { createApp } from 'vue'
import '@noteto/web-client/assets/style.css'
import App from '@noteto/web-client/App.vue'

import router from './router';

const app = createApp(App)

app.use(router)

app.mount('#app')
