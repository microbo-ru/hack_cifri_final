import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
//vue-prism-editor dependency
import "vue-prism-editor/dist/VuePrismEditor.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
