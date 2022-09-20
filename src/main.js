import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import componentsUI from "@/components/UI";
import components from "@/components";
const app = createApp(App);
componentsUI.forEach(element => app.component(element.name, element));
components.forEach(element => app.component(element.name, element));
app.use(store).use(router).mount("#app")

