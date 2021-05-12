import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render (c) { return c("router-view") }
    },
    children:[
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "contact",
        name: "contact",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Contact.vue")
      },
      {
        path: "works",
        name: "works",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Works.vue")
      },
    ]
  }

  // { path: '*', redirect: '/sayfa-bulunamadi' },  
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
});

export default router;
