import Vue from "vue";
import VueRouter from "vue-router";
import ProdutoView from "@/views/ProdutoView.vue";
import AboutView from "@/views/AboutView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/",
    name: "produto",
    component: ProdutoView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
