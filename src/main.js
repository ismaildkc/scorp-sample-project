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
import i18n from './i18n'
Vue.use(VueTheMask);

Vue.prototype._closeModal = new Vue();


Vue.config.productionTip = false;
Vue.prototype.$api = api;

router.beforeEach((to, from, next) =>{
  let language = to.params.lang;
  if(!language){
    language = "en"
  }

  // setting current language
  i18n.locale = language
  next();
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");


window.paymentSuccess = function () {
  // if (cb && typeof cb === 'function') return cb();
}
