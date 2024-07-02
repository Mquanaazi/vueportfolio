import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import styles from "./store/styeles.css"

createApp(App).use(store).use(router).use(styles).mount('#app')
