import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UnidadeView from "@/views/UnidadeView.vue";
import AboutView from "@/views/AboutView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/unidades",
    name: "unidades",
    component: UnidadeView,
  },
  {
    path: "/tarefas"
    
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
