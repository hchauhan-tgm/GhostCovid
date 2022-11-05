import Vue from "vue";
import App from "./App.vue";
import VueFab from 'vue-float-action-button'
import router from "./router";
import store from "./store";
import header from './components/Header.vue'
import footer from './components/Footer.vue'
import titel from './components/Titel.vue'
import zitat from './components/Zitat.vue'

Vue.config.productionTip = false;

Vue.use(VueFab)
Vue.component('Header', header)
Vue.component('Footer', footer)
Vue.component('Titel', titel)
Vue.component('Zitat', zitat)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
