import {createApp} from 'vue'
import {createPinia} from 'pinia'
import Antd from "ant-design-vue";
import App from './App.vue'
import router from './router'
import '@/access'

const app = createApp(App)
app.use(Antd);
app.use(createPinia())
app.use(router)

app.mount('#app')
