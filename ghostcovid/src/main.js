import Vue from "vue";
import App from "./App.vue";
import VueFab from 'vue-float-action-button'
import router from "./router";
import store from "./store";
import header from './components/Header.vue'
import headerspiele from './components/Headerspiele.vue'
import footer from './components/Footer.vue'
import footerspiele from './components/Footerspiele.vue'
import titel from './components/Titel.vue'
import zitat from './components/Zitat.vue'
import endscreen from './components/EndScreen.vue'

Vue.config.productionTip = false;

Vue.use(VueFab)
Vue.component('Header', header)
Vue.component('Headerspiele', headerspiele)
Vue.component('Footer', footer)
Vue.component('Footerspiele', footerspiele)
Vue.component('Titel', titel)
Vue.component('Zitat', zitat)
Vue.component('EndScreen',endscreen)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
