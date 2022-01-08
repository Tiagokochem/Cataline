import { createApp } from "vue";
import App from "./App.vue";
impot store from "./store";

createApp(App)
    .use(store)
    .mount("#app");
