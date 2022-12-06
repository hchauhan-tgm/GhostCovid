import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { 
      title: 'Home' 
    } 
  },
  {
    path: "/training",
    name: "Training",
    meta: { 
      title: 'Training' 
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Training.vue"),
  },
  {
    path: "/erfahrungen",
    name: "Erfahrungen",
    meta: { 
      title: 'Erfahrungen' 
    },
    component: () =>
      import("../views/Erfahrungen.vue"),
  },
  {
    path: "/statistik",
    name: "Statistik",
    meta: { 
      title: 'Statistik' 
    },
    component: () =>
      import("../views/Statistik.vue"),
  },
  {
    path: "/impressum",
    name: "Impressum",
    meta: { 
      title: 'Impressum' 
    },
    component: () =>
      import("../views/Impressum.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    meta: { 
      title: 'Profil' 
    },
    component: () =>
      import("../views/Profil.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { 
      title: 'Login' 
    },
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/registrieren",
    name: "Registrieren",
    meta: { 
      title: 'Registrieren' 
    },
    component: () =>
      import("../views/Registrieren.vue"),
  },
  {
    path: "/erfahrungen/podcast",
    name: "Podcast",
    meta: { 
      title: 'Podcast' 
    },
    component: () =>
      import("../views/Podcast.vue"),
  },
  {
    path: "/erfahrungen/videos",
    name: "Videos",
    meta: { 
      title: 'Videos' 
    },
    component: () =>
      import("../views/Videos.vue"),
  },
  {
    path: "/erfahrungen/forum",
    name: "Forum",
    meta: { 
      title: 'Forum' 
    },
    component: () =>
      import("../views/Forum.vue"),
  },
  {
    path: "/training/entspannung",
    name: "Entspannung",
    meta: { 
      title: 'Entspannung' 
    },
    component: () =>
      import("../views/Entspannung.vue"),
  },
  {
    path: "/training/kreativ",
    name: "Kreativ",
    meta: { 
      title: 'Kreativ' 
    },
    component: () =>
      import("../views/Kreativ.vue"),
  },
  {
    path: "/training/motivation",
    name: "Motivation",
    meta: { 
      title: 'Motivation' 
    },
    component: () =>
      import("../views/Motivation.vue"),
  },
  {
    path: "/training/spiele",
    name: "Spiele",
    meta: { 
      title: 'Spiele' 
    },
    component: () =>
      import("../views/Spiele.vue"),
  },
  {
    path: "/training/spiele/schiebepuzzle",
    name: "Schiebepuzzle",
    meta: { 
      title: 'Schiebepuzzle' 
    },
    component: () =>
      import("../views/Schiebepuzzle.vue"),
  },
  {
    path: "/training/atmen",
    name: "Atmen",
    meta: { 
      title: 'Atemtraining' 
    },
    component: () =>
      import("../views/Atmen.vue"),
  },
  {
    path: "/training/spiele/farben",
    name: "Farbenspiel",
    meta: { 
      title: 'Farbenspiel' 
    },
    component: () =>
      import("../views/Farbenspiel.vue"),
  },
  {
    path: "/training/spiele/memory",
    name: "Memory",
    meta: { 
      title: 'Memory' 
    },
    component: () =>
      import("../views/Memory.vue"),
  },
  {
    path: "/training/spiele/merksdir",
    name: "Merk's Dir",
    meta: { 
      title: 'Merks Dir' 
    },
    component: () =>
      import("../views/Merksdir.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
