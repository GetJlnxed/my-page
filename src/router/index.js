import Vue from "vue";
import VueRouter from "vue-router";

import Intro from "../views/Intro";
import About from "../views/About";
import Greeting from "../views/Greeting";
import Stack from "../views/Stack";
import Roadmap from "../views/Roadmap";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: Intro,
  },
  {
    path: "/greeting",
    name: "greeting",
    component: Greeting,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/stack",
    name: "stack",
    component: Stack,
  },
  {
    path: "/roadmap",
    name: "roadmap",
    component: Roadmap,
  },
];

const router = new VueRouter({
  /* mode: "history", */
  base: process.env.BASE_URL,
  routes,
});

export default router;
