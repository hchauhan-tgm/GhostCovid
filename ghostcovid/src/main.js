import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import header from './components/Header.vue'
import footer from './components/Footer.vue'
import Lightbox from 'vue-easy-lightbox'

Vue.use(Lightbox)
Vue.component('Header', header)
Vue.component('Footer', footer)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
