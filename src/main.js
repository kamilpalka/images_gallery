import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// Vuex
import store from "./store/index.js";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(store).use(vuetify).mount("#app");
