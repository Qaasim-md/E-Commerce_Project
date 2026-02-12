import { createApp } from 'vue'
import vuex from 'vuex'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vuex())
app.use(router)

app.mount('#app')
