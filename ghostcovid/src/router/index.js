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
      import("../views/Erfahrungen.vue"),
  },
  {
    path: "/statistik",
    name: "Statistik",
    component: () =>
      import("../views/Statistik.vue"),
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () =>
      import("../views/Impressum.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () =>
      import("../views/Profil.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/registrieren",
    name: "Registrieren",
    component: () =>
      import("../views/Registrieren.vue"),
  },
  {
    path: "/podcast",
    name: "Podcast",
    component: () =>
      import("../views/Podcast.vue"),
  },
  {
    path: "/videos",
    name: "Videos",
    component: () =>
      import("../views/Videos.vue"),
  },
  {
    path: "/forum",
    name: "Forum",
    component: () =>
      import("../views/Forum.vue"),
  },
  {
    path: "/entspannung",
    name: "Entspannung",
    component: () =>
      import("../views/Entspannung.vue"),
  },
  {
    path: "/kreativ",
    name: "Kreativ",
    component: () =>
      import("../views/Kreativ.vue"),
  },
  {
    path: "/motivation",
    name: "Motivation",
    component: () =>
      import("../views/Motivation.vue"),
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
