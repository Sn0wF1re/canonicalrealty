import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(router);
app.use(VueGtag, {
    config: { id: 'G-WXVJNCHQ6S' }  // Your Google Analytics ID
}, router);

app.mount('#app')