import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import JQuery from "jquery";
window.$ = JQuery;

import api from "@/api";

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);

Vue.prototype._closeModal = new Vue();

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)


Vue.config.productionTip = false;

Vue.prototype.$api = api;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


window.paymentSuccess = function () {
  // if (cb && typeof cb === 'function') return cb();
}
