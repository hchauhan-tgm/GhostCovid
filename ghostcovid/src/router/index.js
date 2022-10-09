import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/training",
    name: "Training",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Training.vue"),
  },
  {
    path: "/erfahrungen",
    name: "Erfahrungen",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Erfahrungen.vue"),
  },
  {
    path: "/statistik",
    name: "Statistik",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Statistik.vue"),
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Impressum.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profil.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/registrieren",
    name: "Registrieren",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registrieren.vue"),
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
