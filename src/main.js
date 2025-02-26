import { createApp } from "vue";
import { createPinia } from "pinia"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

import router from "./router";
import App from "./App.vue";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount("#app")

/* createApp(App).use(router).mount("#app"); */
