import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userInfo: {},
  },
  mutations: {
    _isLoggedIn(state, data){
      state.isLoggedIn = data;
    },
    _userInfo(state, data){
      state.userInfo = data;
    },
  },
  actions: {},
  modules: {}
});
