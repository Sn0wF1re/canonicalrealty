import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import VueGtag from "vue-gtag";

app.use(VueGtag, {
    config: { id: 'G-WXVJNCHQ6S' }  // Your Google Analytics ID
}, router);

createApp(App).mount('#app')