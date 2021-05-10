import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Carousel.vue")
  },

  { path: '*', redirect: '/sayfa-bulunamadi' },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
