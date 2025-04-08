import { createApp } from 'vue'
import Wujie from 'wujie-vue3'
import App from './App.vue'
import router from './router'
const { preloadApp } = Wujie
createApp(App).use(Wujie).use(router).mount('#app')

preloadApp({ name: "vue3", url: "http://localhost:5175", exec: true })
preloadApp({ name: "react", url: "http://localhost:5174", exec: true })
